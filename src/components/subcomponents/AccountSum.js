import React, { Component } from 'react';


class AccountSum extends Component {


  render() {

    return (
      <div className="row BankSummary">
        <h1></h1>
        <div>
          <p>Account Balance: {console.log(this.props.bankData)}</p>
        </div>
      </div>
    );
  }
}

export default AccountSum;
