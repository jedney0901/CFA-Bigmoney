import React, { Component } from 'react';
import { Form, FormGroup, Button, ControlLabel, FormControl, Checkbox } from 'react-bootstrap';

class CreateTransaction extends Component {


  handleValue(event) {
    console.log(event)
  }

  handleCreate(event) {
    event.preventDefault();
    console.log('Get em')
    const transaction = {

      description: this.description.value,
      amount: this.amount.value,
      frequencyOfTransaction: this.frequencyOfTransaction.value,
      transactionCategory: this.transactionCategory.value,
      // bill: this.bill.value,
      transactionPriority: this.transactionPriority.value,
      transactionPurchaseDate: this.transactionPurchaseDate.value,
    }
    console.log(this.transactionCategory)
    // this.props.createNewTransaction(this.ref.createInput.value);
  }



  render () {
    return (
      <Form onSubmit={(e) => this.handleCreate(e)}>
        <FormGroup>
          <ControlLabel>Description</ControlLabel>
          <FormControl
            id="description"
            type="text"
            label="Description"
            ref={(input) => this.description = input}
            placeholder= 'Give a description'>
          </FormControl>
        </FormGroup>

        <FormGroup>
          <ControlLabel>Amount</ControlLabel>
          <FormControl
            id="amount"
            type="text"
            label="Amount"
            ref={(input) => this.amount = input}
            placeholder='Enter an amount'>
          </FormControl>
        </FormGroup>

        <FormGroup controlId="formControlsSelect">
          <ControlLabel>Select Category</ControlLabel>
          <FormControl
            componentClass="select"
            placeholder= "Select a Category"
            ref={(input) => this.transactionCategory = input}
          >
            <option value="select">select</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Bills">Bills</option>
            <option value="Food">Food</option>
            <option value="Groceries">Groceries</option>
            <option value="Weekend fun">Weekend fun</option>
            <option value="Everyday purchase">Everyday purchase</option>
          </FormControl>
        </FormGroup>

        <ControlLabel>Is this a bill?</ControlLabel>
        <Checkbox
          id="bill"
          onChange={this.handleValue}
          value="No"
          ref={(input) => this.Bill = input}
        >
          Is this a bill?
        </Checkbox>



        <FormGroup controlId="formControlsSelect">
          <ControlLabel>How often does this occur?</ControlLabel>
          <FormControl componentClass="select" placeholder="Select Category" ref={(input) => this.frequencyOfTransaction = input}>
            <option value="Weekly">select</option>
            <option value="Fortnightly">Entertainment</option>
            <option value="Monthlhy">Bills</option>
            <option value="Every 6 months">Food</option>
            <option value="Yearly">Groceries</option>
            <option value="Weekend fun">Weekend fun</option>
            <option value="Everyday purchase">Everyday purchase</option>
          </FormControl>
        </FormGroup>

        <FormGroup
          id="transactionPurchaseDate"
          type="Transaction Purchase Date"
          label="Transaction Purchase Date"
          placeholder="When do you want to purchase this by?"
          ref={(input) => this.transactionPurchaseDate = input}>

        </FormGroup>

        <FormGroup controlId="formControlsSelect">
          <ControlLabel>How often does this occur?</ControlLabel>
          <FormControl componentClass="select" placeholder="Select Category" ref="transactionPriority">
            <option value="select">select</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </FormControl>
        </FormGroup>

        <Button type="submit">
          Submit
        </Button>
    </Form>
    )
  }
}

export default CreateTransaction;
