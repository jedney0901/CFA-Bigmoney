import React, { Component } from 'react';
import CreateForm from '../forms/CreateForm'


class AccountSum extends Component {


  render() {

    return (
      <div>
        <div className="BankSummary">
          <h4 className="align-items">Account Information</h4>
          <div>
            <p>Account Name: Josh Edney</p>
            <p>Account Balance: $2423</p>

          </div>
        </div>

        <div className="BankSummary">
          <div>
            <p>Total Spent Last Week: $753</p>
            <p>Total allocated to your wants: $120</p>
            <CreateForm
              createTransaction={this.props.createTransaction}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default AccountSum;
