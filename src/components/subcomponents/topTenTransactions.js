import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

class TopTenTransactions extends Component {

render() {

    return (
      <div>
        <h1>Previous 10 transactions</h1>
        <Table responsive striped bordered>
          <thead>
            <tr>
              <th className="col-xs-5 col-sm-2 col-md-2">Date</th>
              <th className="col-xs-1 col-sm-1 col-md-1">Amount</th>
              <th className="col-xs-12 col-sm-6 col-md-6">Description</th>
              <th className="col-xs-1 col-sm-1 col-md-1">Categorise</th>
            </tr>
          </thead>
          <tbody>
            {this.props.transactionData.slice(0, 10).map((t, index) =>
              <tr key={index}>
                <td>{t.transactionPurchaseDate}</td>
                <td>{t.amount}</td>
                <td>{t.description}</td>
                <td><button>{t.transactionCategory || 'Categorise'}</button></td>
              </tr>
            )}
          </tbody>
        </Table>

      </div>
    )
  }
}

export default TopTenTransactions;
