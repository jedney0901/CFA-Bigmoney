import React, { Component } from 'react';

class CreateTransaction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      billValue: false
    }
    this.handleCreate = this.handleCreate.bind(this)
  }

  handleCreate(event) {
    console.log('hello')
    event.preventDefault();

    let transaction = {
      _id: (new Date()).getTime(),
      transactionCategory: this.transactionCategory.value,
    }
    console.log(transaction)
    this.props.editTransaction(transaction)
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
          <label>Select a category for this transaction:</label>
          <select
            className="form-control"
            ref={(input) => { this.transactionCategory = input }}
          >
            <option value="select">select</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Bills">Bills</option>
            <option value="Food">Food</option>
            <option value="Groceries">Groceries</option>
            <option value="Weekend fun">Weekend fun</option>
            <option value="Everyday purchase">Everyday purchase</option>
          </select>
        </div>
        <div>
          <input className="btn btn-primary" type="submit" value="Submit" onClick={(e) => this.handleCreate(e)} />
        </div>
      </form>
    )
  }
}

export default CreateTransaction;
