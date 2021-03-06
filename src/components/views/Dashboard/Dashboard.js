import React from "react";
// react plugin for creating charts
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Code from "@material-ui/icons/Code";// core components
import GridItem from "../../components/Grid/GridItem.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import Table from "../../components/Table/Table.js";
import Tasks from "../../components/Tasks/Tasks.js";
import CustomTabs from "../../components/CustomTabs/CustomTabs.js";
import Card from '../../components/Card/Card';//"components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardIcon from "../../components/Card/CardIcon.js";
import CardBody from "../../components/Card/CardBody.js";
import { bought, to_sell } from '../../variables/general'//"variables/general.js";


import styles from '../../assets/jss/dashboard-react/views/dashboardStyle';

const useStyles = makeStyles(styles);

const Dashboard = (props) => {
  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={7} md={3}>
          <Card>
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
                <Icon>content_copy</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Total Items Bought</p>
              <h3 className={classes.cardTitle}>
                24
              </h3>
            </CardHeader>

          </Card>
        </GridItem>
        <GridItem xs={12} sm={7} md={3}>
          <Card>
            <CardHeader color="success" stats icon>
              <CardIcon color="success">
                <Store />
              </CardIcon>
              <p className={classes.cardCategory}>Amount Spent</p>
              <h3 className={classes.cardTitle}>1000 wei</h3>
            </CardHeader>

          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="danger" stats icon>
              <CardIcon color="danger">
                <Icon>info_outline</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Amount Left in Account</p>
              <h3 className={classes.cardTitle}>175</h3>
            </CardHeader>

          </Card>
        </GridItem>

      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
          <CustomTabs
            title="Tasks:"
            headerColor="primary"
            tabs={[
              {
                tabName: "Bought",

                tabContent: (
                  <Tasks
                    checkedIndexes={[0, 3]}
                    tasksIndexes={[0, 1, 2, 3]}
                    tasks={bought}
                  />
                )
              },
              {
                tabName: "ToSell",
                tabIcon: Code,
                tabContent: (
                  <Tasks
                    checkedIndexes={[0]}
                    tasksIndexes={[0, 1]}
                    tasks={to_sell}
                  />
                )
              },

            ]}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color="warning">
              <h4 className={classes.cardTitleWhite}>Trending Requirements</h4>
              <p className={classes.cardCategoryWhite}>
                Updated on 10th April, 2021
              </p>
            </CardHeader>
            <CardBody>
              {/* <Table
                tableHeaderColor="warning"
                tableHead={["ID", "Name", "Expected Price"]}
                tableData={[
                  ["1", "Chess", "70 wei"],
                  ["2", "Physics Books", "200 wei",],
                  ["3", "Chemistry Books", "140 wei",],
                  ["4", "Notes 2nd Sem", "80 wei", ]
                ]}
              /> */}
              <Table
                tableHeaderColor="warning"
                tableHead={["ID", "Name", "Info", "Author", "Price", "Owner", "Status"]}
                
                tableData={this.props.products.map((product, key) => {
                          return (
                            <div key={key}>
                              [{!product.purchased ? product.id.toString() : null},
                              {!product.purchased ? product.name : null},
                              {!product.purchased ? product.info : null},
                              {!product.purchased ? product.author : null},
                              {!product.purchased ? window.web3.utils.fromWei(product.price.toString(), 'Ether') : null},
                              {!product.purchased ? product.owner : null}
                              
                                {(!product.purchased && (product.owner !== this.props.account))
                                  ? <button
                                    className="btn btn-danger"
                                    name={product.id}
                                    value={product.price}
                                    onClick={(event) => {
                                      this.props.purchaseProduct(event.target.name, event.target.value)
                                    }}
                                  >
                                    Buy
                        </button>
                                  : (!product.purchased) ? "Owner" : null
                                }
                              

                           ] </div>
                          )
                        })}
              />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}

export default Dashboard;
