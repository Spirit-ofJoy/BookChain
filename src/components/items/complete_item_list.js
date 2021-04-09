import React, { Component } from "react";
import ItemsBox from "./items";

class Test extends Component {
  state = [
    {
      itemName: "Lmao Nation",
      itemPrice: 69,
      itemOwner: "54545dvsbsdbvksdb",
      moreDetails: ["a", "b", "c"],
      itemID: "8486",
    },
    {
      itemName: "Nepo ",
      itemPrice: 80085,
      itemOwner: "54545dvsbsdbvksdb",
      moreDetails: ["Author - King Luther"],
      itemID: "8486",
    },
    {
      itemName: "skdb",
      itemPrice: 454,
      itemOwner: "54545dvsbsdbvksdb",
      moreDetails:[],
      itemID: "8486",
    },
    {
      itemName: "skdb",
      itemPrice: 454,
      itemOwner: "54545dvsbsdbvksdb",
      moreDetails: [],
      itemID: "8486",
    }
  ];

  render() {
    return (
      <div className="container" style={{ marginTop: "60px",marginBottom: "60px",width: "100%"  }}>
        <ItemsBox AllCardDetails={this.state} />
      </div>
    );
  }
}

export default Test;
