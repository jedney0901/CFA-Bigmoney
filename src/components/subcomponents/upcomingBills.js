import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

class UpComingBills extends Component {

  componentDidMount() {
    this.getNeedToPurchase()
  }

  getNeedToPurchase() {
  var bills = this.props.transactionData.filter((b) => {
      return b.bill === true || b.frequencyOfTransaction !== "Once off"
    })
  }


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
            {this.transactionData.slice(0, 10).map((b, index) =>
              <tr key={index}>
                <td>{b.transactionPurchaseDate}</td>
                <td>{b.amount}</td>
                <td>{b.description}</td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
    )
  }
}

export default UpComingBills;
