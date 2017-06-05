import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import { Form, Text, Select, Checkbox } from 'react-form'

class CreateTransaction extends Component {

render() {

    return (
      <Modal>
        <Form onSubmit={submitForm}>
          <div>
            <h6>Transaction Description</h6>
            <Text
              field='Description'
              placeholder= {this.props.account.transactionData.description || 'Give a description'}
            />
          </div>
          <div>
            <h6>Transaction Amount</h6>
            <Text
              field='Amount'
              placeholder= {this.props.transactionData.amount ||'Amount'}
            />
          </div>
          <div>
            <h6>Transaction Priorty</h6>
            <Select
              field='transactionCategory'
              placeholder = {this.props.transactionData.transactionCategory || 'Select'}
              options={[{
                    label: 'Entertainment',
                    value: 'Entertainment'
              }, {
                    label: 'Bills',
                    value: 'Bills'
              }, {
                    label: 'Food',
                    value: 'Food'
              }, {
                    label: 'Groceries',
                    value: 'Groceries'
              }, {
                    label: 'Weekend fun',
                    value: 'Weekend fun'
              }, {
                    label: 'Everyday purchase',
                    value: 'Everyday purchase'
              }]}
            />
          </div>
          {/* If total risidual amount is too small to be able to purchase it within the required amount of time then they must adjust their budget */}
          <div>
            <h6>When do you want to be able to buy this?</h6>
            <Select
              field='transactionPurchaseDate'
              // options= Need to add in date picker options and make sure that it fits in with the current format.
            />
          </div>
          {/* Need to add in functionality to say that if there is a date then priority = total amount/total weekly cycles = low || med || high priority */}
          <div>
            <h6>Transaction Priorty</h6>
            <Select
              field='transactionPriority'
              placeholder = {this.props.transactionData.transactionPriority || 'Select'}
              options={[{
                    label: 'Low priorty',
                    value: 'Low priority'
              }, {
                    label: 'Medium priority',
                    value: 'Medium priority'
              }, {
                    label: 'High priority',
                    value: 'High priority'
              }]}
            />
          </div>
          <h6>Is this a recurring bill?</h6>
          <Checkbox
            field='bill'
          />
          {/*Need to add functionality that says if it is a recurring bill then the frequency of Transaction gets added.  */}
          <div>
            <h6>Frequency of Transaction</h6>
            <Select
              placeholder='Select'
              field='transactionFrequency'
              options={[{
                    label: 'Weekly',
                    value: 'Weekly'
              }, {
                    label: 'Fortnightly',
                    value: 'Fortnightly'
              }, {
                    label: 'Monthly',
                    value: 'Monthly'
              }, {
                    label: 'Every 6 months',
                    value: 'Every 6 months'
              }, {
                    label: 'Yearly',
                    value: 'Yearly'
              }
              ]}
            />
          </div>
        </Form>
      </Modal>
    )
  }
}

export default TopTenTransactions;
