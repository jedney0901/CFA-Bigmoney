import React, { Component } from 'react';


class TransactionDisp extends Component {

render() {

    return (
      <div>
        {this.props.data.map(t =>
          <li>{t.description}, {t.amount}, {t.date}</li>
        )}
      </div>
    )
  }
}

export default TransactionDisp;
