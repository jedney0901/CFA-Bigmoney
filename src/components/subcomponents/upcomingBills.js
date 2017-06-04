import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

class UpcomingBills extends Component {

render() {

    return (
      <div>
        <h1>Previous 10 transactions</h1>
        <Table responsive striped bordered>
          <thead>
            <tr>
              <th className="col-xs-6 col-sm-3 col-md-3">Date</th>
              <th className="col-xs-6 col-sm-3 col-md-3">Amount</th>
              <th className="col-xs-12 col-sm-6 col-md-6">Description</th>
            </tr>
          </thead>
          <tbody>
            {this.props.transactionData.filter(bills =  bills.frequencyOfTransaction == "Yes"
              <tr key={index}>
                <td>{t.dateOfPay}</td>
                <td>{t.amount}</td>
                <td>{t.description}</td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
    )
  }
}

export default TopTenTransactions;
