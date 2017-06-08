import React, { Component } from 'react';
import TopTenTransactions from '../subcomponents/TopTenTransactions';
import UpComingBills from '../subcomponents/UpComingBills';
import CreateForm from '../forms/CreateForm'

class BudgetDash extends Component {
  constructor(props) {
    super(props)

  }

  getPurchaseCycles() {
    this.state.account.transactions.map((t, index) =>
      t.bill === "Yes" || t.transactionPurchaseDate <= Date.now() ? this.state.account.transactions.needToPurchase(t) : this.state.account.transactions.wantToPurchase(t)
    )
  }

  needToPurchase(t) {
    return
    <ul>
      <li>
        {t.transactionDescription}
      </li>
      <li>
        {t.transactionPurchaseDate}
      </li>
      <li>
        {t.transaction.amount}
      </li>
    </ul>
  }

  wantToPurchase() {

  }

render() {

    return (
      <div className="row">
        <div className="col-md-1">
          <CreateForm
            createTransaction={this.props.createTransaction}
          />
        </div>
        <div className="col-md-12">
          <UpComingBills
            billsData={this.props.billsData}
          />
        </div>
        <div className="col-md-12">
          <TopTenTransactions
            transactionData={this.props.transactionData}
            editTransaction={this.props.editTransaction}
          />
        </div>
      </div>
    )
  }
}

export default BudgetDash;
