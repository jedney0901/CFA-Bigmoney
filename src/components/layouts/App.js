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
            transactionCategory: "Select",
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

    this.createNewTransaction = this.createNewTransaction.bind(this);
    this.updatePurchaseTransaction = this.updatePurchaseTransaction.bind(this);
    this.setDate = this.setDate.bind(this);


  }

  componentDidMount() {
    this.getTransactionData()
    const date = new Date();
    console.log(date);
    console.log(this.setDateStructure(date));
    this.getUpComingBills();
  };

// CRUD functions
  createNewTransaction(transactionValues) {
    const transactions = {...this.state.account.transactions}
    this.state.account.transactions.push({
      transactions: transactions
    })
    this.setState({ transactions: transactions})
  }

  updatePurchaseTransaction() {

    const transaction = {
      description: this.description.value
      amount: this.amount.value
      transactionCategory: this.transactionCategory.value
      transactionPriority: this.transactionPriority.value
      trsanctionPurchaseDate: this.trsanctionPurchaseDate.value
      transactionFrequency: this.transactionFrequency.value
    }

    // Update a current purchaseTransaction whether it's a need to pay or a want to pay.
    // 1. Get a copy of all transactions.
    // findByOne and provide a form which allows them to edit the params incl, purchase date OR priority level, desc, type etc...
    // setState  and bind function to be passed down to components.


  }

  deletePurchaseTransaction() {
  }

  getTransactionData() {
    this.setState({ account: { transactions: this.transactionData }})
  }

  // End CRUD functions

  getUpComingBills() {
    var newarray = this.state.account.transactions.slice(0, 10).filter((b) => {
      return b.bill === "Yes" || b.frequencyOfTransaction !== "Once off"
    })
    console.log(newarray)
  }
  // return
  // <ul>
  //   <li>{b.transaction.transactionPurchaseDate}</li>
  //   <li>{b.transaction.amount}</li>
  //   <li>{b.transaction.Description}</li>
  // </ul>


// Sets the date structure to dd/mm/yyyyy
  setDateStructure(purchaseDate) {
    var d = purchaseDate;
    var curr_date = d.getDate();
    var curr_month = d.getMonth() + 1;
    var curr_year = d.getFullYear();
    return curr_date + "/" + curr_month + "/" + curr_year;
  }


// This is part of the datepicker NPM package. Need to confirm whether this will be able to be used in conjunction to when creating/editing transactions.
  handleDateChange(date) {
    this.setState({
      transactionPurchaseDate: date
    });
  }


  setNextBillDate() {
    const transactions = this.state.account.transactions
    const purchaseDate = transaction.transactionPurchaseDate

    transactions.map((transaction) => {
      if (transactions.frequencyOfTransaction === "Weekly") {
        purchaseDate.setDate(this.setDateStructure(purchaseDate.getDate() + 7))}

      else if (transactions.frequencyOfTransaction === "Fortnightly") {
        purchaseDate.setDate(this.setDateStructure(purchaseDate.getDate() + 14))}

        else if (transactions.frequencyOfTransaction === "Monthly") {
          purchaseDate.setDate(this.setDateStructure(purchaseDate.getMonth() + 1))}

      else if(transactions.frequencyOfTransaction === "Yearly") {
        purchaseDate.setDate(this.setDateStructure(purchaseDate.getFullYear() + 1))}

      this.setState({transactions.transactionPurchaseDate : this.purchaseDate})
    })
  }


  getPurchaseCycles() {
    this.state.account.transactions.map((t, index) =>
      t.bill == "Yes" || t.transactionPurchaseDate <= Date.now() ? this.state.account.transactions.needToPurchase(t) : this.state.account.transactions.wantToPurchase(t)
    )
  }
  //
  needToPurchase() {
    // Get a copy of all transactions from getPurchaseCycles
    // orderBy transaction date and show the next 4 weeks of transactions.
    t.orderby(t.transactionPurchaseDate).filter(
      if t.transactionPurchaseDate <== setDateStructure(Date.now())
        var cycleAmount = <th>Cycle {}</th>
    )

  }

  wantToPurchase() {

  }

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
                createTransaction={this.createNewTransaction.bind(this)}
                updateTransaction={this.updatePurchaseTransaction.bind(this)}
                setDate={this.setDate.bind(this)}
                bankData={this.state.account}
                incomeData={this.state.income}
                allData={this.state}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
