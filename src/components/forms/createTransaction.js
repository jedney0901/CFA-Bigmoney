import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';

class CreateTransaction extends Component {

render() {

    return (
      <Modal>
        <form>
          <input type="text" placeholder="Enter a description" />
          <input type="text" placeholder="How much?" />
          <input type="text" placeholder="How would you categorise this?" />
          <input type="text" placeholder="What type of transaction is this?" />
          <input type="checkbox" placeholder="Is this a bill?" />
          <input type="text" placeholder="Do you want to have this by a certain date?" />
          <input type="text" placeholder="What level of priority would you give this item?" />



          <
        </form>
      </Modal>

      date: "Enter a date",
      amount: 0,
      description: "Enter a description",
      bill: "No",
      frequencyOfTransaction: "One off",
      transactionType: "Select",
      transactionCategory: "Select",
      transactionPriority: "Choose the level of income you want to assign",
      transactionPurchaseDate: "Choose the date you want to purchase this by"
    )
  }
}

export default TopTenTransactions;
