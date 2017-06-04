import React, { Component } from 'react';
import './App.css';
import Navbar from '../navbar/Navbar'
import AccountSum from '../accountSum/AccountSum'
import transactionData from '../data/transactionData'
import TransactionDisp from '../transactionData/transactionsDisp'

var income = this.state.income.weeklyPay + this.state.income.weeklyTax
var totalSalary = (income * 52) * 1.095
var totalTax = this.state.income.weeklyTax * 52


class App extends Component {
  constructor(props) {
  super(props);
  // console.log('data', transactionData);
  this.data = transactionData
  this.state = {
    account: {
      _id: "",
      userId: {},
      bankId: {},
      accountNumber: 264083137,
      accountBalance: 6000,
      accountName: "Joshua Edney",
      transactions: [
        {
          date: "Enter a date",
          amount: 0,
          description: "Enter a description"
          // transactionType: "EFT",\
        }
      ]
    },
    superannuation: {
      _id: "",
      superId: 51222014929,
      accountId: 51423,
      superBalance: 4951,
      salarySacrifice: 0,

    },
    income: {
      _id: ""
      employerId: 1470,
      employerName: "Techtime",
      weeklyPay: 876,
      weeklyTax: 78,
      dayOfPay: "Tuesday",
      frequencyOfPay: "Fortnightly"
    },
    bills: {
      _id: "",
      billerName: "Enter a biller Name",
      dateOfPay: Date.now(),
      frequencyOfBill: "Fortnightly"
      }
    }
  }

  componentDidMount() {
    this.getTransactionData()
  };

  createPurchaseTransation() {
    // Need to be able to add to state as a future transaction type depending on whether it's a need to buy or a want to buy. e.g. a bill or a purchase.
  }

  updatePurchaseTransaction() {
    // Update a current purchaseTransaction whether it's a need to pay or a want to pay.
    // 1. Get a copy of all transactions.
    // findByOne and provide a form which allows them to edit the params incl, purchase date OR priority level, desc, type etc...

  }

  updatePreviousTransaction() {
    // Get a copy of all of the current TopTenTransactions
    // Grab a transaction by the transaction ID and create an edit formslac including ability to add reocurring params, transaction type.
    // Need to bind this function so it can be passed down to the transaction component
    // Update the transaction and setState auto close modal.

  }


  setObjectId() {
    if _id == ""
      this.setState({ })
  }




  render() {
    return (
      <div className="row">
        <Navbar/>
        <div className="container">
          <AccountSum bankData={this.state.account}/>
          Hello world
          <TransactionDisp data={this.state.account.transactions}/>
        </div>
      </div>
    )
  }
}

export default App;
