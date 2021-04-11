import React from "react";
import "./the_info_box.css";

const Info = () => {
  return (
    <div className="info-for-the-app">
      <h1>Head to </h1>
      {/* <p>src/screens/metamask/the_info_box.css and js</p> */}
      <h2><a href="https://metamask.io/" style={{color:"cyan"}}>Metamask</a></h2>
      <p>
      MetaMask provides an essential utility for blockchain newcomers, token traders, crypto gamers, and developers.
      </p>

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <p>
      MetaMask generates passwords and keys on your device, so only you have access to your accounts and data. You always choose what to share and what to keep private.
      </p>

      <p>
      MetaMask provides the simplest yet most secure way to connect to blockchain-based applications. You are always in control when interacting on the new decentralized web.
      </p>
      <p>
      Available as a browser extension and as a mobile app, MetaMask equips you with a key vault, secure login, token wallet, and token exchange—everything you need to manage your digital assets.
      </p>

    </div>
  );
};

export default Info;
