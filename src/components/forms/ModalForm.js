import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import CreateTransaction from './createTransaction';



class ModalForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
  }


  render() {
    let close = () => this.setState({ show: false});

    return (
      <div className="modal-container" style={{height: 200}}>
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
            <CreateTransaction />
          </Modal.Body>

          <Modal.Footer>
            <Button onClick={close}>Close</Button>
          </Modal.Footer>

        </Modal>
      </div>
    );
  }
}

export default ModalForm;
