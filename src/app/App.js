import React, { Component } from 'react';
import './App.css';
import Navbar from '../navbar/Navbar'
import AccountSum from '../accountSum/AccountSum'
import TransactionData from '../data/transactionData'

class App extends Component {
  constructor(props) {
  super(props);

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
          amount: 400,
          transactionType: "EFT",
          description: "Purchased the entire class coffee and bacon egg rolls",
          date: Date.now()
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
    this.getTransactionData
  };

  getTransactionData() {
    this.setState({ accounts: {
      transactions: {
        date: transactionData.date
        amount: transactionData.amount
        description: transactionData.description
      }
    }})
  }

  incomeCalc() {

  }
  render() {
    return (
      <div className="App">
        <Navbar/>
        <AccountSum bankData={this.state.account}/>

        Hello world
      </div>
    )
  }
}

export default App;
