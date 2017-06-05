import React, { Component } from 'react';
import TopTenTransactions from '../subcomponents/topTenTransactions';
import { Button } from 'react-bootstrap';


class TransactionDisp extends Component {
  constructor(props) {
  super(props);

    this.state = {
      clicked: false
    }

    this.handleClick = this.handleClick.bind(this);

  }

  handleClick() {
    this.setState({
      clicked: true
    });
  }


  upDateItemCycle() {
    // Need to filter over each item and run the function AFTER the handlePriorityDrag OR if another item has been added/deleted.
    // Function needs to grab updated price, and change the order of the item.
  }



  priorityList() {
    // This will loop over all want items based on their priority level showing the user what items they currently have in them and the basic information.
    // This needs to list all items in the priority list based on their priority level and list all the features including projected purchase time,
  }


  handlePriorityChange() {
    // Need to loop over each item in their 'purchase list'
    // Need to implement react drag and drop onClick so you can change the status from a need to a want and also the priority status of that item.
    // Need to set the state so it updates the priority/status of the item.
  }



render() {

    return (
      <div>
        <TopTenTransactions
          transactionData={this.props.transactionData}/>

        <Button onClick={this.handleClick} />
        {this.state.clicked ? <NewComponent /> : null}
        
      </div>

    )
  }
}

export default TransactionDisp;
