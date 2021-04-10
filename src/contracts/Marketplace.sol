pragma solidity ^0.5.0;

contract Marketplace {
    string public name;
    uint public productCount = 0;
    uint public postCount = 0;
    mapping(uint => Product) public products;
    mapping(uint => Post) public posts;

    struct Post {
        uint id;
        string content;
        uint tipAmount;
        address payable author;
    }

    struct Product {
        uint id;
        string name;
        uint price;
        address payable owner;
        bool purchased;
        address seller;
    }

    event PostCreated(
        uint id,
        string content,
        uint tipAmount,
        address payable author
    );

    event PostTipped(
        uint id,
        string content,
        uint tipAmount,
        address payable author
    );


    event ProductCreated(
        uint id,
        string name,
        uint price,
        address payable owner,
        bool purchased,
        address seller
    );

    event ProductPurchased(
        uint id,
        string name,
        uint price,
        address payable owner,
        bool purchased,
        address seller
    );

    constructor() public {
        name = "BookChain";
    }

    function createPost(string memory _content) public {
        // Require valid content
        require(bytes(_content).length > 0);
        // Increment the post count
        postCount ++;
        // Create the post
        posts[postCount] = Post(postCount, _content, 0, msg.sender);
        // Trigger event
        emit PostCreated(postCount, _content, 0, msg.sender);
    }

    function tipPost(uint _id) public payable {
        // Make sure the id is valid
        require(_id > 0 && _id <= postCount);
        // Fetch the post
        Post memory _post = posts[_id];
        // Fetch the author
        address payable _author = _post.author;
        // Pay the author by sending them Ether
        address(_author).transfer(msg.value);
        // Incremet the tip amount
        _post.tipAmount = _post.tipAmount + msg.value;
        // Update the post
        posts[_id] = _post;
        // Trigger an event
        emit PostTipped(postCount, _post.content, _post.tipAmount, _author);
    }

    function createProduct(string memory _name, uint _price) public {
        // Require a valid name
        require(bytes(_name).length > 0);
        // Require a valid price
        require(_price > 0);
        // Increment product count
        productCount ++;
        // Create the product
        products[productCount] = Product(productCount, _name, _price, msg.sender, false, msg.sender);
        // Trigger an event
        emit ProductCreated(productCount, _name, _price, msg.sender, false, msg.sender);
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
        emit ProductPurchased(productCount, _product.name, _product.price, msg.sender, true, og_owner);
    }
}
