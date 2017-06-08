import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

class UpComingBills extends Component {

  componentWillReceiveProps(nextProps) {
    console.log('next props:', nextProps)
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
                <td>21/10/2017</td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
    )
  }
}

export default UpComingBills;
