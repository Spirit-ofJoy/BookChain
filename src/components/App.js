import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
} from "react-router-dom";
import Web3 from 'web3'
// import logo from '../logo.png';
import './App.css';
import Marketplace from '../abis/Marketplace.json'
import Navbar from './Navbar'
import Network from './Network'
import Main from './Main'
import Dashboard from './Dashboard'
import Loading from "./Loading"

class App extends Component {

  async componentWillMount() {
    await this.loadWeb3()
    await this.loadBlockchainData()
  }

  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
    }
    else {
      window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
    }
  }

  async loadBlockchainData() {
    const web3 = window.web3
    // Load account
    const accounts = await web3.eth.getAccounts()
    this.setState({ account: accounts[0] })
    const networkId = await web3.eth.net.getId()
    const networkData = Marketplace.networks[networkId]
    if(networkData) {
      const marketplace = web3.eth.Contract(Marketplace.abi, networkData.address)
      this.setState({ marketplace })
      const productCount = await marketplace.methods.productCount().call()
      this.setState({ productCount })
      // Load products
      for (var i = 1; i <= productCount; i++) {
        const product = await marketplace.methods.products(i).call()
        this.setState({
          products: [...this.state.products, product]
        })
      }
      this.setState({ loading: false})
      const postCount = await marketplace.methods.postCount().call()
      this.setState({ postCount })
      // Load Posts
      for (var i = 1; i <= postCount; i++) {
        const post = await marketplace.methods.posts(i).call()
        this.setState({
          posts: [...this.state.posts, post]
        })
      }
      // // Sort posts. Show highest tipped posts first
      // this.setState({
      //   posts: this.state.posts.sort((a,b) => b.tipAmount - a.tipAmount )
      // })
    } else {
      window.alert('Marketplace contract not deployed to detected network.')
    }
  }

  constructor(props) {
    super(props)
    this.state = {
      account: '',
      productCount: 0,
      products: [],
      posts: [],
      postCount: 0,
      loading: true
    }
    this.createPost = this.createPost.bind(this)
    this.createProduct = this.createProduct.bind(this)
    this.purchaseProduct = this.purchaseProduct.bind(this)
  }

  createPost(content) {
    this.setState({ loading: true })
    this.state.marketplace.methods.createPost(content).send({ from: this.state.account })
    .once('receipt', (receipt) => {
      this.setState({ loading: false })
    })
  }


  createProduct(name, info, author, price) {
    this.setState({ loading: true })
    this.state.marketplace.methods.createProduct(name, info, author, price).send({ from: this.state.account })
    .once('receipt', (receipt) => {
      this.setState({ loading: false })
    })
  }

  purchaseProduct(id, price) {
    this.setState({ loading: true })
    this.state.marketplace.methods.purchaseProduct(id).send({ from: this.state.account, value: price })
    .once('receipt', (receipt) => {
      this.setState({ loading: false })
    })
  }

  render() {
    return (
      <div>
      <BrowserRouter>
      <Switch>
      <Route>
      <Navbar account={this.state.account} />
          <Switch>
          <Route path="/" exact>
          <Loading time={2} />
          <Main
                account={this.state.account}
                products={this.state.products}
                createProduct={this.createProduct}
                purchaseProduct={this.purchaseProduct} />
      </Route>
        
        <Route path="/dashboard" exact>
              <Dashboard 
                account={this.state.account}
                products={this.state.products}
                createProduct={this.createProduct}
                purchaseProduct={this.purchaseProduct} 
              />
      </Route>
        <Route path="/network" exact>
              <Network
                    posts={this.state.posts}
                    createPost={this.createPost}
                    tipPost={this.tipPost}
                  />
      </Route>
      </Switch>
      </Route>
      </Switch></BrowserRouter>
        
      </div>
    );
  }
}

export default App;
