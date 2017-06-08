import React, { Component } from 'react';
import { Form, FormGroup, Button, ControlLabel, FormControl, Checkbox } from 'react-bootstrap';

class CreateTransaction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      billValue: false
    }
  }

  handleCreate(event) {
    event.preventDefault();
    let billString = this.bill.value;
    console.log(billString);
    // converts string to boolean
    let convertBool = (billString == 'true')

    console.log(convertBool);
    let transaction = {
      description: this.description.value,
      amount: this.amount.value,
      frequencyOfTransaction: this.frequencyOfTransaction.value,
      transactionCategory: this.transactionCategory.value,
      bill: this.bill.value,
      transactionPriority: this.transactionPriority.value,
      transactionPurchaseDate: this.transactionPurchaseDate.value,
    }
    console.log(transaction)
    this.props.createTransaction(transaction)
  }

  handleBillChange() {

    let billInput = document.getElementById('isBill');
    if(billInput.checked){
      this.setState({ billValue: true })
      console.log(billInput.value);
    } else {
      this.setState({ billValue: false })
      console.log(billInput.value);
    }
  }

  render () {
    return (
      <form className="Form">

        <div className="form-group">
          <label>Description:</label>
          <input
            name="description"
            type="text"
            className="form-control"
            ref={(input) => { this.description = input }}
          />
        </div>

        <div className="form-group">
          <label>Amount:</label>
          <input
            name="amount"
            type="number"
            className="form-control"
            ref={(input) => { this.amount = input }}
          />
        </div>

        <div className="form-group">
          <label>Purchase Date:</label>
          <input
            name="amount"
            type="number"
            className="form-control"
            ref={(input) => { this.transactionPurchaseDate = input }}
          />
        </div>

        <div className="form-group">
          <label>Select a category for this transaction:</label>
          <select className="form-control" ref={(input) => { this.transactionCategory = input }}>
            <option value="select">select</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Bills">Bills</option>
            <option value="Food">Food</option>
            <option value="Groceries">Groceries</option>
            <option value="Weekend fun">Weekend fun</option>
            <option value="Everyday purchase">Everyday purchase</option>
          </select>
        </div>

        <div className="form-check">
          <label>Is Bill:</label>
          <input
            id="isBill"
            name="isBill"
            className="form-check-input"
            type="checkbox"
            value={this.state.billValue}
            onChange={this.handleBillChange.bind(this)}
            ref={(input) => { this.bill = input }}
          />
        </div>

        <div className="select">
          <label>How often does this bill occur?:</label>
          <select className="form-control" ref={(input) => { this.frequencyOfTransaction = input }}>
            <option value="Weekly">select</option>
            <option value="Fortnightly">Entertainment</option>
            <option value="Monthlhy">Bills</option>
            <option value="Every 6 months">Food</option>
            <option value="Yearly">Groceries</option>
          </select>
        </div>

        <div className="select">
          <label >What level of priority would you put this purchase?:</label>
          <select className="form-control" ref={(input) => { this.transactionPriority = input }}>
            <option value="Select">select</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>

        <div>
          <input className="btn btn-primary" type="submit" value="Submit" onClick={(e) => this.props.handleCreate(e)} />
        </div>
      </form>
    )
  }
}

export default CreateTransaction;
