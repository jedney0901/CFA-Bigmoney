import React, { Component } from 'react';
import TopTenTransactions from './topTenTransactions'


class TransactionDisp extends Component {
  constructor(props) {
  super(props);

  this.state = {
    transactionType: "Standard Payment",
    transactionGroup: "General"
  }
}

render() {

    return (
      <div>
        <TopTenTransactions data={this.props.data}/>
      </div>
    )
  }
}

export default TransactionDisp;
