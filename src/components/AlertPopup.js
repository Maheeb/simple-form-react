import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const AlertPopup = (props) => {

    return (
        <div>

            <Modal show={true}>
                <Modal.Header closeButton onClick={props.handleClose}>
                    <Modal.Title>Invalid</Modal.Title>
                </Modal.Header>
                <Modal.Body>Your age should be greater than or equal 18 years old!!!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.handleClose}>
                        Close
                    </Button>

                </Modal.Footer>
            </Modal>
        </div>

    );
}

export default AlertPopup;