import React, { Component } from 'react';
import TopTenTransactions from '../subcomponents/TopTenTransactions';
import UpComingBills from '../subcomponents/UpComingBills';
import CreateTransaction from '../forms/CreateTransaction';
import ModalForm from '../forms/ModalForm'
import { Button } from 'react-bootstrap';




class BudgetDash extends Component {
  constructor(props) {
    super(props)

  }

  getTransaction() {

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
      <div>
        <div className="col-md-3">
          <ModalForm
            createTransaction={this.props.createTransaction}
          />
        </div>
        <div className="col-md-12">
          <TopTenTransactions
            transactionData={this.props.transactionData}/>
        </div>
        <div className="col-md-12">
          {/* <UpComingBills
            transactionData={this.props.transactionData}
            needToPurchase={this.props.needToPurchase}
          /> */}
        </div>
      </div>
    )
  }
}

export default BudgetDash;
