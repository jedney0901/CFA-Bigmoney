import React, { Component } from 'react';
import TopTenTransactions from './topTenTransactions'


class TransactionDisp extends Component {
  constructor(props) {
  super(props);

  this.state = {
    transactionType: "Select",
    transactionGroup: "Select",
    transactionPriority: "Choose the level of income you want to assign",
    transactionPurchaseDate: "Choose the date you want to purchase this by"

  }
}

  getPurchaseCycles() {
    // Need to loop over each item and bring in each bill, or purchase in order.
    // This needs to prioritise each item by date and then group them by each week with a heading that says 'Week or Month as a grouping type'
    // This then needs to be fed into a scrolling dashboard which the user can see.
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
        <TopTenTransactions data={this.props.data}/>
      </div>
    )
  }
}

export default TransactionDisp;
