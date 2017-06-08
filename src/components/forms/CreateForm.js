import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import CreateTransaction from './CreateTransaction';

class CreateForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
    this.createTransaction = this.createTransaction.bind(this);
  }

createTransaction(tx) {
  this.setState({ show: false});
  this.props.createTransaction(tx);
}


  render() {
    let close = () => this.setState({ show: false});

    return (
      <div className="modal-container">
        <Button
          bsStyle="primary"
          bsSize="large"
          onClick={() => this.setState({ show: true})}
        >
          Create Transaction
        </Button>

        <Modal
          show={this.state.show}
          onHide={close}
          container={this}
          aria-labelledby="contained-modal-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title">Create a transaction</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <CreateTransaction
              createTransaction={(tx) => this.createTransaction(tx)}
              transactionData={this.props.transactionData}
            />
          </Modal.Body>

          <Modal.Footer>
            <Button onClick={close}>Close</Button>
          </Modal.Footer>

        </Modal>
      </div>
    );
  }
}

export default CreateForm;
