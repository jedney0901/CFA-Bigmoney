import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import EditTransaction from './EditTransaction';

class EditForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
    this.editTransaction = this.editTransaction.bind(this);
  }
  //
  //
  // transactionCategory() {
  //   this.props.transactionData.map((t) =>
  // }

  editTransaction(tx) {
    this.setState({ show: false});
    tx._id = this.props.transactionid
    this.props.editTransaction(tx);
  }


  render() {
    let close = () => this.setState({ show: false});

    return (
      <div className="modal-container">
        <Button
          bsStyle="primary"
          bsSize="medium"
          onClick={() => this.setState({ show: true})}
        >
          Categorise

        </Button>

        <Modal
          show={this.state.show}
          onHide={close}
          container={this}
          aria-labelledby="contained-modal-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title">Edit Categorise</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <EditTransaction
              editTransaction={(tx) => this.editTransaction(tx)}
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

export default EditForm;
