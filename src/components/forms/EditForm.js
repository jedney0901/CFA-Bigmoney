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
          bsSize="large"
          onClick={() => this.setState({ show: true})}
        >
          Edit Category
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

export default EditForm;
