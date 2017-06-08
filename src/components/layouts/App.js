import React, { Component } from 'react';
import '../../styles/App.css';
import Navbar from '../layouts/navbar/Navbar'
import AccountSum from '../subcomponents/AccountSum'
import transactionData from '../../data/TransactionData'
import billsData from '../../data/BillsData'
import BudgetDash from '../pages/BudgetDash'

class App extends Component {
  constructor(props) {
  super(props);

  // console.log('data', transactionData);
  this.transactionData = transactionData
  this.billsData = billsData

    this.state = {
      account: {
        _id: "507f191e810c19729de860ea",
        userId: 1111,
        bankId: 12341234,
        accountNumber: 264023237,
        accountBalance: 2423,
        accountName: "Joshua Edney",
      },
      transactions: [
        {
          _id: 0,
          amount: 0,
          description: "Enter a description",
          frequencyOfTransaction: "Once off",
          transactionCategory: "Select",
          transactionPriority: "Choose the level of income you want to assign",
          transactionPurchaseDate: "Choose the date you want to purchase this by"
        }
      ],
      bills: this.billsData,
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
    this.editTransaction = this.editTransaction.bind(this);

  }

  componentDidMount() {
    this.getTransactionData()
    console.log(this.state.bills)
    const transactionPurchaseDate = new Date();
  };

// Load transaction and bills data
  getTransactionData() {
    this.setState({
      account: {
        _id: "507f191e810c19729de860ea",
        userId: 1111,
        bankId: 12341234,
        accountNumber: 264023237,
        accountBalance: 2423,
        accountName: "Joshua Edney",
      },
      transactions: this.transactionData,
      bills: this.billsData
    })
  }

  // Create function
  createNewTransaction(transaction) {
    console.log("transaction:", transaction)
    const transactions = [transaction, ...this.state.transactions]
    this.setState({ transactions: transactions })
  }

  editTransaction(transaction) {
    console.log("edittransaction:", transaction)
    const transactions = [...this.state.transactions]
    console.log(transactions)
    // this.setState(transaction.transaction._id, {transactionCategory: { 'transaction.transactionCategory' }});
  }

// End CRUD functions

  getBankData() {
    const account = this.state.account

    account.map((index, a) => {
      <ul>
        <li>{a.bankId}</li>
        <li>{a.accountBalance}</li>
      </ul>
    })
  }

  toggleBill() {
    console.log('before', this.state.transactions[0].bill);
    this.state.transactions[0].bill = !this.state.transactions[0].bill;
    this.forceUpdate();
    console.log('after', this.state.transactions[0].bill);
  }


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
    const transactions = this.state.transactions
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
      // this.setState({ transactions.transactionPurchaseDate : this.purchaseDate })
    })
  }

  render() {
    console.log('hello', this.state.bills)
    return (
      <div className="row">
        <Navbar/>
        <div className="container">
          <div className="col-xs-12 col-sm-12 col-md-12">
            <BudgetDash
              createTransaction={(transaction) => this.createNewTransaction(transaction)}
              editTransaction={(transaction) => this.editTransaction(transaction)}
              transactionData={this.state.transactions}
              billsData={this.state.bills}
              toggleBill={this.toggleBill.bind(this)}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
