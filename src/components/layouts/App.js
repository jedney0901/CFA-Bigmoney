import React, { Component } from 'react';
import '../../styles/App.css';
import Navbar from '../layouts/navbar/Navbar'
import AccountSum from '../subcomponents/AccountSum'
import transactionData from '../../data/transactionData'
import BudgetDash from '../pages/BudgetDash'

// var income = this.state.income.weeklyPay + this.state.income.weeklyTax
// var totalSalary = (income * 52) * 1.095
// var totalTax = this.state.income.weeklyTax * 52


class App extends Component {
  constructor(props) {
  super(props);

  // console.log('data', transactionData);
  this.transactionData = transactionData

    this.state = {
      account: {
        _id: "",
        userId: {},
        bankId: {},
        accountNumber: 264083137,
        accountBalance: 2423,
        accountName: "Joshua Edney",
        transactions: [
          {
            date: "Enter a date",
            amount: 0,
            description: "Enter a description",
            bill: "No",
            frequencyOfTransaction: "One off",
            transactionType: "Select",
            transactionGroup: "Select",
            transactionPriority: "Choose the level of income you want to assign",
            transactionPurchaseDate: "Choose the date you want to purchase this by"
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
        _id: "",
        employerId: 1470,
        employerName: "Techtime",
        weeklyPay: 876,
        weeklyTax: 78,
        dayOfPay: "Tuesday",
        frequencyOfPay: "Fortnightly"
      },
    }
  }

  componentDidMount() {
    this.getTransactionData()
  };


  getTransactionData() {
    this.setState({ account: { transactions: this.transactionData }})
  }

  // createFutureTransaction() {
  //   const transactions = {...this.state.account.transactions}
  //   this.setState({ transactions });
  // }

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


  // setObjectId() {
  //   if _id == ""
  //     this.setState({ })
  // }




  render() {
    return (
      <div className="row">
        <Navbar/>
        <div className="container-fluid">
          <AccountSum className="bordered"
            bankData={this.state.account}
          />
          <div className="container">
            <div className="row">
              Hello world
              <BudgetDash
                transactionData={this.state.account.transactions}
                bankData={this.state.account}
                incomeData={this.state.income}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
