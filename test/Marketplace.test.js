const Marketplace = artifacts.require('./Marketplace.sol')

require('chai')
  .use(require('chai-as-promised'))
  .should()

contract('Marketplace', ([deployer, seller, buyer, writer, receiver]) => {
  let marketplace

  before(async () => {
    marketplace = await Marketplace.deployed()
  })

  describe('deployment', async () => {
    it('deploys successfully', async () => {
      const address = await marketplace.address
      assert.notEqual(address, 0x0)
      assert.notEqual(address, '')
      assert.notEqual(address, null)
      assert.notEqual(address, undefined)
      assert.notEqual(address, undefined)
    })

    it('has a name', async () => {
      const name = await marketplace.name()
      assert.equal(name, 'BookChain')
    })
  })

  describe('products', async () => {
    let result, productCount

    before(async () => {
      result = await marketplace.createProduct('iPhone X','info', 'author', web3.utils.toWei('1', 'Ether'), { from: seller })
      productCount = await marketplace.productCount()
    })

    it('creates products', async () => {
      // SUCCESS
      assert.equal(productCount, 1)
      const event = result.logs[0].args
      assert.equal(event.id.toNumber(), productCount.toNumber(), 'id is correct')
      assert.equal(event.name, 'iPhone X', 'name is correct')
      assert.equal(event.info, 'info', 'info is correct')
      assert.equal(event.author, 'author', 'author is correct')
      assert.equal(event.price, '1000000000000000000', 'price is correct')
      assert.equal(event.owner, seller, 'owner is correct')
      assert.equal(event.purchased, false, 'purchased is correct')
      assert.equal(event.seller, seller, 'seller is correct')

      // FAILURE: Product must have a name
      await await marketplace.createProduct('', '', '', web3.utils.toWei('1', 'Ether'), { from: seller }).should.be.rejected;
      // FAILURE: Product must have a price
      await await marketplace.createProduct('iPhone X', 'info', 'author', 0, { from: seller }).should.be.rejected;
    })

    it('lists products', async () => {
      const product = await marketplace.products(productCount)
      assert.equal(product.id.toNumber(), productCount.toNumber(), 'id is correct')
      assert.equal(product.name, 'iPhone X', 'name is correct')
      assert.equal(product.info, 'info', 'info is correct')
      assert.equal(product.author, 'author', 'Author is correct')
      assert.equal(product.price, '1000000000000000000', 'price is correct')
      assert.equal(product.owner, seller, 'owner is correct')
      assert.equal(product.purchased, false, 'purchased is correct')
      assert.equal(product.seller, seller, 'seller is correct')
    })

    it('sells products', async () => {
      // Track the seller balance before purchase
      let oldSellerBalance
      oldSellerBalance = await web3.eth.getBalance(seller)
      oldSellerBalance = new web3.utils.BN(oldSellerBalance)

      // SUCCESS: Buyer makes purchase
      result = await marketplace.purchaseProduct(productCount, { from: buyer, value: web3.utils.toWei('1', 'Ether')})

      // Check logs
      const event = result.logs[0].args
      assert.equal(event.id.toNumber(), productCount.toNumber(), 'id is correct')
      assert.equal(event.name, 'iPhone X', 'name is correct')
      assert.equal(event.info, 'info', 'info is correct')
      assert.equal(event.author, 'author', 'Author is correct')
      assert.equal(event.price, '1000000000000000000', 'price is correct')
      assert.equal(event.owner, buyer, 'owner is correct')
      assert.equal(event.purchased, true, 'purchased is correct')
      assert.equal(event.seller, seller, 'purchased is correct')

      // Check that seller received funds
      let newSellerBalance
      newSellerBalance = await web3.eth.getBalance(seller)
      newSellerBalance = new web3.utils.BN(newSellerBalance)

      let price
      price = web3.utils.toWei('1', 'Ether')
      price = new web3.utils.BN(price)

      const exepectedBalance = oldSellerBalance.add(price)

      assert.equal(newSellerBalance.toString(), exepectedBalance.toString())

      // FAILURE: Tries to buy a product that does not exist, i.e., product must have valid id
      await marketplace.purchaseProduct(99, { from: buyer, value: web3.utils.toWei('1', 'Ether')}).should.be.rejected;      // FAILURE: Buyer tries to buy without enough ether
      // FAILURE: Buyer tries to buy without enough ether
      await marketplace.purchaseProduct(productCount, { from: buyer, value: web3.utils.toWei('0.5', 'Ether') }).should.be.rejected;
      // FAILURE: Deployer tries to buy the product, i.e., product can't be purchased twice
      await marketplace.purchaseProduct(productCount, { from: deployer, value: web3.utils.toWei('1', 'Ether') }).should.be.rejected;
      // FAILURE: Buyer tries to buy again, i.e., buyer can't be the seller
      await marketplace.purchaseProduct(productCount, { from: buyer, value: web3.utils.toWei('1', 'Ether') }).should.be.rejected;
    })

  })
  describe('posts', async () => {
    let result, postCount

    before(async () => {
      result = await marketplace.createPost('Topic','This is my first post', { from: writer })
      postCount = await marketplace.postCount()
    })

    it('creates posts', async () => {
      // SUCESS
      assert.equal(postCount, 1)
      const event = result.logs[0].args
      assert.equal(event.id.toNumber(), postCount.toNumber(), 'id is correct')
      assert.equal(event.heading, 'Topic', 'Heading is correct')
      assert.equal(event.content, 'This is my first post', 'content is correct')
      assert.equal(event.writer, writer, 'writer is correct')

      // FAILURE: Post must have content
      await marketplace.createPost('','', { from: writer }).should.be.rejected;
    })

    it('lists posts', async () => {
      const post = await marketplace.posts(postCount)
      assert.equal(post.id.toNumber(), postCount.toNumber(), 'id is correct')
      assert.equal(post.heading, 'Topic', 'Heading is correct')
      assert.equal(post.content, 'This is my first post', 'content is correct')
      assert.equal(post.writer, writer, 'writer is correct')
    })

  })
  describe('chats', async () => {
    let result, chatCount

    before(async () => {
      result = await marketplace.createChat('Topi','This is my first pos', receiver, { from: writer })
      chatCount = await marketplace.chatCount()
    })

    it('creates chats', async () => {
      // SUCESS
      assert.equal(chatCount, 1)
      const event = result.logs[0].args
      assert.equal(event.id.toNumber(), chatCount.toNumber(), 'id is correct')
      assert.equal(event.heading, 'Topi', 'Heading is correct')
      assert.equal(event.content, 'This is my first pos', 'content is correct')
      assert.equal(event.receiver, receiver, 'receiver is correct')
      assert.equal(event.writer, writer, 'writer is correct')
      

      // FAILURE: Post must have content
      await marketplace.createChat('','', receiver,  { from: writer}).should.be.rejected;
    })

    it('lists chats', async () => {
      const chat = await marketplace.chats(chatCount)
      assert.equal(chat.id.toNumber(), chatCount.toNumber(), 'id is correct')
      assert.equal(chat.heading, 'Topi', 'Heading is correct')
      assert.equal(chat.content, 'This is my first pos', 'content is correct')
      assert.equal(chat.receiver, receiver, 'receiver is correct')
      assert.equal(chat.writer, writer, 'writer is correct')
      
    })

  })
})
