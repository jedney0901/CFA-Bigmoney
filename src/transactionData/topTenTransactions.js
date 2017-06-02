import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

class TopTenTransactions extends Component {

render() {

    return (
      <div>
        <Table responsive striped bordered>
          <thead>
            <tr>
              <th className="col-xs-6 col-sm-3 col-md-3">Date</th>
              <th className="col-xs-6 col-sm-3 col-md-3">Amount</th>
              <th className="col-xs-12 col-sm-6 col-md-6">Description</th>
            </tr>
          </thead>
          <tbody>
            {this.props.data.slice(0, 10).map(t =>
              <tr>
                <td>{t.date}</td>
                <td>${t.amount}</td>
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
