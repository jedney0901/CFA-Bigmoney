import React, { Component } from 'react';
import TopTenTransactions from '../subcomponents/topTenTransactions';
import CreateTransaction from '../forms/createTransaction';
import ModalForm from '../forms/ModalForm'
import { Button } from 'react-bootstrap';




class TransactionDisp extends Component {
  constructor(props) {
  super(props);
// State
    this.state = {
      isCreating: false,
      isEditing: false,
      totalCycles: ""
    }

// Binds
    // this.handleClick = this.handleClick.bind(this);

  }

// UpdateItemCycle
  upDateItemCycle() {
    // Need to filter over each item and run the function AFTER the handlePriorityDrag OR if another item has been added/deleted.
    // Function needs to grab updated price, and change the order of the item.
  }


// Generate priorityList
  priorityList() {
    // This will loop over all want items based on their priority level showing the user what items they currently have in them and the basic information.
    // This needs to list all items in the priority list based on their priority level and list all the features including projected purchase time,
  }

// Drag and drop functionality
  handlePriorityChange() {
    // Need to loop over each item in their 'purchase list'
    // Need to implement react drag and drop onClick so you can change the status from a need to a want and also the priority status of that item.
    // Need to set the state so it updates the priority/status of the item.
  }



render() {

    return (
      <div>
        <div className="col-md-3">
          <ModalForm
            // onClick={this.props.createNewTransaction}
            // createTransaction={this.props.createTransaction}
          />
        </div>
        <div className="col-md-12">
          <TopTenTransactions
            transactionData={this.props.transactionData}/>
        </div>
        <div className="col-md-12">
          <TopTenTransactions
            transactionData={this.props.transactionData}/>
        </div>


        {/* {this.state.clicked ? <CreateTransaction /> : null} */}
      </div>

    )
  }
}

export default TransactionDisp;
