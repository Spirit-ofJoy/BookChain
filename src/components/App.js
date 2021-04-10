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
// import Main from './Main'
// import Dashboard from './Dashboard'
import A from "./Z_Final/addShowProduct";
import B from "./Z_Final/searchProducts_history";

import C from "./Z_Final/ownedItems";
import D from "./Z_Final/forSelling";

import Metamask from "../components/metamask/main_screen"

import Background from "./background_star/background";
// import Loading from "../components/home_page/Loading";
import Blogs from "../components/blogs/Blog_List"
import HomePage from '../components/home_page/Home';
import Loader from "./Loader"
// import Dash from "../components/views/Dashboard/Dashboard"

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
    if (networkData) {
      const marketplace = new web3.eth.Contract(Marketplace.abi, networkData.address)
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

      const postCount = await marketplace.methods.postCount().call()
      this.setState({ postCount })
      // Load Posts
      for (var j = postCount; j >= 1; j--) {
        const post = await marketplace.methods.posts(j).call()
        this.setState({
          posts: [...this.state.posts, post]
        })
      }
      this.setState({ loading: false })
      // // Sort posts. Show highest tipped posts first
      // this.setState({
      //   posts: this.state.posts.sort((a) => a.postCount )
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

  createPost(heading, content) {
    this.setState({ loading: true })
    this.state.marketplace.methods.createPost(heading, content).send({ from: this.state.account })
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
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/metamask" exact>
                  <Metamask />
                </Route>

            <Route>
              <Navbar account={this.state.account} />
              <Switch>


              <Route path="/productAdd" exact>
              <Loader time={0.4} />
                  <Background />
                  {/* <Loading time={0.3} /> */}
                  <A
                    account={this.state.account}
                    products={this.state.products}
                    createProduct={this.createProduct}
                    purchaseProduct={this.purchaseProduct}
                  />
                </Route>

                <Route path="/ItemsOnSale" exact>
                <Loader time={0.4} />
                  <Background />
                  <D
                    account={this.state.account}
                    products={this.state.products}
                    createProduct={this.createProduct}
                    purchaseProduct={this.purchaseProduct}
                  />
                </Route>

                <Route path="/ItemsOwned" exact>
                <Loader time={0.4} />
                  <Background />

                  <C
                    account={this.state.account}
                    products={this.state.products}
                    createProduct={this.createProduct}
                    purchaseProduct={this.purchaseProduct}
                  />
                </Route>

                <Route path="/search" exact>
                <Loader time={0.4} />
                  <Background />

                  <B
                    account={this.state.account}
                    products={this.state.products}
                    createProduct={this.createProduct}
                    purchaseProduct={this.purchaseProduct}
                  />
                </Route>
                <Route path="/network" exact>
                <Loader time={0.4} />
                  <Blogs
                    account={this.state.account}
                    posts={this.state.posts}
                    createPost={this.createPost}
                  />

                  {/* <Network
                    account={this.state.account}
                    posts={this.state.posts}
                    createPost={this.createPost}
                    
                  /> */}
                </Route>
              </Switch>
            </Route>
          </Switch>
        </BrowserRouter>

      </div>
    );
  }
}

export default App;
