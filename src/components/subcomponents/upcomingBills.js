import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

class UpComingBills extends Component {
  constructor(props) {
  super(props)

  this.state = {
    nextTransactionDate: "21/1/2017"
  }
}

  componentWillReceiveProps(nextProps) {
    console.log('next props:', nextProps)
  }

  componentDidMount(b) {
    this.setNextBillDate()
  }

  // Sets the date structure to dd/mm/yyyyy
    setDateStructure(purchaseDate) {
      var d = purchaseDate;
      var curr_date = d.getDate();
      var curr_month = d.getMonth() + 1;
      var curr_year = d.getFullYear();
      return curr_date + "/" + curr_month + "/" + curr_year;
    }

  setNextBillDate(b) {

    this.props.billsData.map((bills) => {
      if (bills.frequencyOfTransaction === "Weekly" && bills.transactionPurchaseDate <= Date.now()) {
        bills.setDate(this.setDateStructure(bills.getDate() + 7))
      }
      else if (bills.frequencyOfTransaction === "Fortnightly" && bills.transactionPurchaseDate <= Date.now()) {
        bills.setDate(this.setDateStructure(bills.getDate() + 14))
      }
      else if (bills.frequencyOfTransaction === "Monthly" && bills.transactionPurchaseDate <= Date.now()) {
        bills.setDate(this.setDateStructure(bills.getMonth() + 1))
      }
      else if(bills.frequencyOfTransaction === "Yearly" && bills.transactionPurchaseDate <= Date.now()) {
        bills.setDate(this.setDateStructure(bills.getFullYear() + 1))
      }
      // this.setState({ transactions.transactionPurchaseDate : this.purchaseDate })
      console.log(bills)
    })
  }

  render() {
    return (
      <div>
        <h1>Upcoming Bills</h1>
        <Table responsive striped bordered>
          <thead>
            <tr>
              <th className="col-xs-2 col-sm-3 col-md-1">Amount</th>
              <th className="col-xs-2 col-sm-3 col-md-1">Date</th>
              <th className="col-xs-3 col-sm-6 col-md-5">Description</th>
              <th className="col-xs-4 col-sm-3 col-md-4">Next Date of Payment</th>
            </tr>
          </thead>
          <tbody>
            {this.props.billsData.map((b, index) =>
              <tr key={index}>
                <td>${b.amount}</td>
                <td>{b.transactionPurchaseDate}</td>
                <td>{b.description}</td>
                <td>{this.state.nextTransactionDate}</td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
    )
  }
}

export default UpComingBills;
