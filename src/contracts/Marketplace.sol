pragma solidity ^0.5.0;

contract Marketplace {
    string public name;
    uint public productCount = 0;
    uint public postCount = 0;
    uint public chatCount = 0;
    mapping(uint => Product) public products;
    mapping(uint => Post) public posts;
    mapping(uint => Chat) public chats;

    struct Post {
        uint id;
        string heading;
        string content;   
        address payable writer;
    }

    struct Chat{
        uint id;
        string heading;
        string content;
        address receiver;
        address payable writer;
        
    }

    struct Product {
        uint id;
        string name;
        string info;
        string author;
        uint price;
        address payable owner;
        bool purchased;
        address seller;
    }

    event PostCreated(
        uint id,
        string heading,
        string content,
        address payable writer
    );

    event ChatCreated(
        uint id,
        string heading,
        string content,
        address receiver,
        address payable writer
        
    );



    event ProductCreated(
        uint id,
        string name,
        string info,
        string author,
        uint price,
        address payable owner,
        bool purchased,
        address seller
    );

    event ProductPurchased(
        uint id,
        string name,
        string info,
        string author,
        uint price,
        address payable owner,
        bool purchased,
        address seller
    );

    constructor() public {
        name = "BookChain";
    }

    function createPost(string memory _heading, string memory _content) public {
        // Require valid content
        // require(bytes(_heading).length > 0);
        require(bytes(_content).length > 0);
        
        // Increment the post count
        postCount ++;
        // Create the post
        posts[postCount] = Post(postCount, _heading, _content, msg.sender);
        // Trigger event
        emit PostCreated(postCount, _heading, _content, msg.sender);
    }

    function createChat(string memory _heading, string memory _content, address _receiver) public {
        // Require valid content
        
        // require(bytes(_heading).length > 0);
        require(bytes(_content).length > 0);
        // require(bytes(_receiver).length > 0);
        
        // Increment the chat count
        chatCount ++;
        // Create the chat
        chats[chatCount] = Chat(chatCount, _heading, _content, _receiver, msg.sender);
        // Trigger event
        emit ChatCreated(chatCount, _heading, _content, _receiver, msg.sender);
    }


    function createProduct(string memory _name, string memory _info, string memory _author, uint _price) public {
        // Require a valid name
        require(bytes(_name).length > 0);
        // Require a valid info
        require(bytes(_info).length > 0);
        // Require a valid author
        require(bytes(_author).length > 0);
        // Require a valid price
        require(_price > 0);
        // Increment product count
        productCount ++;
        // Create the product
        products[productCount] = Product(productCount, _name, _info, _author, _price, msg.sender, false, msg.sender);
        // Trigger an event
        emit ProductCreated(productCount, _name, _info, _author, _price, msg.sender, false, msg.sender);
    }

    function purchaseProduct(uint _id) public payable {
        // Fetch the product
        Product memory _product = products[_id];
        // Fetch the owner
        address payable _seller = _product.owner;
        // Fetch original owner
        address og_owner = _product.seller;
        // Make sure the product has a valid id
        require(_product.id > 0 && _product.id <= productCount);
        // Require that there is enough Ether in the transaction
        require(msg.value >= _product.price);
        // Require that the product has not been purchased already
        require(!_product.purchased);
        // Require that the buyer is not the seller
        require(_seller != msg.sender);
        // Transfer ownership to the buyer
        _product.owner = msg.sender;
        // Mark as purchased
        _product.purchased = true;
        // Update the product
        products[_id] = _product;
        // Pay the seller by sending them Ether
        address(_seller).transfer(msg.value);
        // Trigger an event
        emit ProductPurchased(productCount, _product.name, _product.info, _product.author, _product.price, msg.sender, true, og_owner);
    }
}
