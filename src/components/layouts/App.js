import React, { Component } from 'react';
import '../../styles/App.css';
import Navbar from '../layouts/navbar/Navbar'
import AccountSum from '../subcomponents/AccountSum'
import transactionData from '../../data/TransactionData'
import BudgetDash from '../pages/BudgetDash'
import ModalForm from '../forms/ModalForm'

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
        _id: "507f191e810c19729de860ea",
        userId: 1111,
        bankId: 12341234,
        accountNumber: 264023237,
        accountBalance: 2423,
        accountName: "Joshua Edney",
        transactions: [
          {
            amount: 0,
            description: "Enter a description",
            bill: false,
            frequencyOfTransaction: "One off",
            transactionCategory: "Select",
            transactionPriority: "Choose the level of income you want to assign",
            transactionPurchaseDate: "Choose the date you want to purchase this by"
          }
        ]
      },
      income: {
        _id: "507f191e810c19729de581gd",
        employerId: 1470,
        employerName: "Techtime",
        weeklyPay: 876,
        weeklyTax: 78,
        dayOfPay: "Tuesday",
        frequencyOfPay: "Fortnightly"
      },
    }

    this.createNewTransaction = this.createNewTransaction.bind(this);
  }

  componentDidMount() {
    this.getTransactionData()
    const transactionPurchaseDate = new Date();
  };

  findTransaction() {
    const transactions = this.state.account.transactions

    var transaction = transactions.filter((t) => {
        return t.description == t.description || t.date == t.date
      })
    }

  toggleBill() {
    console.log('before', this.state.account.transactions[0].bill);
    this.state.account.transactions[0].bill = !this.state.account.transactions[0].bill;
    this.forceUpdate();
    console.log('after', this.state.account.transactions[0].bill);
  }

// Create function
  createNewTransaction(transaction) {
    const transactions = {...this.state.account.transactions}
    var transaction = transaction
    this.state.account.transactions.push({
      transactions: transaction
    })
    console.log(transaction)
    this.setState({ transactions: transactions })
  }

  getTransactionData() {
    this.setState({ account: { transactions: this.transactionData }})
  }

  // End CRUD functions

// Sets the date structure to dd/mm/yyyyy
  setDateStructure(purchaseDate) {
    var d = purchaseDate;
    var curr_date = d.getDate();
    var curr_month = d.getMonth() + 1;
    var curr_year = d.getFullYear();
    return curr_date + "/" + curr_month + "/" + curr_year;
  }

// This is part of the datepicker NPM package. Need to confirm whether this will be able to be used in conjunction to when creating/editing transactions.
  setNextBillDate() {
    const transactions = this.state.account.transactions
    const purchaseDate = transactions.transactionPurchaseDate

    transactions.map((transaction) => {
      if (transactions.frequencyOfTransaction === "Weekly" && transactions.transactionPurchaseDate <= Date.now()) {
        purchaseDate.setDate(this.setDateStructure(purchaseDate.getDate() + 7))
      }
      else if (transactions.frequencyOfTransaction === "Fortnightly" && transactions.transactionPurchaseDate <= Date.now()) {
        purchaseDate.setDate(this.setDateStructure(purchaseDate.getDate() + 14))
      }
      else if (transactions.frequencyOfTransaction === "Monthly" && transactions.transactionPurchaseDate <= Date.now()) {
        purchaseDate.setDate(this.setDateStructure(purchaseDate.getMonth() + 1))
      }
      else if(transactions.frequencyOfTransaction === "Yearly" && transactions.transactionPurchaseDate <= Date.now()) {
        purchaseDate.setDate(this.setDateStructure(purchaseDate.getFullYear() + 1))
      }
      this.setState({ transactions.transactionPurchaseDate : this.purchaseDate })
    })
  }


  getPurchaseCycles() {
    this.state.account.transactions.map((t, index) =>
      t.bill === "Yes" || t.transactionPurchaseDate <= Date.now() ? this.state.account.transactions.needToPurchase(t) : this.state.account.transactions.wantToPurchase(t)
    )
  }


  render() {
    return (
      <div className="row">
        <Navbar/>
        <div className="col-xs 2 col-sm-2 col-md-2">
          <AccountSum
            bankData={this.state.account.accountBalance}
          />
        </div>
        <div className="col-xs-10 col-sm-10 col-md-10">
          <BudgetDash
            transactionData={this.state.account.transactions}
            createTransaction={this.createNewTransaction.bind(this, transaction)}
            // handleEdit={this.handleEdit.bind(this)}
            toggleBill={this.toggleBill.bind(this)}
          />
        </div>
      </div>
    )
  }
}

export default App;
