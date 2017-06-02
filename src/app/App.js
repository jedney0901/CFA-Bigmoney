import React, { Component } from 'react';
import './App.css';
import Navbar from '../navbar/Navbar'
import AccountSum from '../accountSum/AccountSum'
import transactionData from '../data/transactionData'
import TransactionDisp from '../transactionData/transactionsDisp'

class App extends Component {
  constructor(props) {
  super(props);
  // console.log('data', transactionData);
  this.data = transactionData
  this.state = {
    account: {
      _id: {},
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
          // transactionType: "EFT",

        }
      ]
    },
    superannuation: {
      _id: {},
      superId: {},
      accountId: {},
      superBalance: 4951,
      salarySacrifice: 0,

    },
    income: {
      _id: {},
      employerId: {},
      employerName: {},
      weeklyPay: 876,
      weeklyTax: 78,
      dayOfPay: "Tuesday",
      frequencyOfPay: "Fortnightly"
    },
    bills: {
      _id: {},
      billerId: {},
      billerName: {},
      dateOfPay: Date.now(),
      frequencyOfBill: "Fortnightly"
      }
    }
  }

  componentDidMount() {
    this.getTransactionData()
  };

  getTransactionData() {
    this.setState({ account: { transactions: this.data }})
}



  incomeCalc() {

  }

  render() {
    return (
      <div className="row">
        <Navbar/>
        <div className="container">
          <AccountSum bankData={this.state.account}/>
          {/* <TransactionData transactions={this.state.account.transactions}/>
          */}
          Hello world
          <TransactionDisp data={this.state.account.transactions}/>
        </div>
      </div>
    )
  }
}

export default App;
