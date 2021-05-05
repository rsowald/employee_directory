import React from "react";
import { Button, Modal } from "react-bootstrap";
import dateFormat from "dateformat";

function EmployeeModal(props) {

    return (

        <Modal show={!!props.employee} onHide={props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{props.employee?.name.first} {props.employee?.name.last}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <img className="mr-1 center block" src={props.employee?.picture.large} alt="portrait"></img>
          Birthday: {dateFormat(props.employee?.dob.date, "longDate")}<br />
          Phone: {props.employee?.phone}<br />
          Cell: {props.employee?.cell}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose}>
                    Close
          </Button>
                <Button variant="danger" onClick={props.handleClose}>
                    Remove Employee
          </Button>
            </Modal.Footer>
        </Modal>

    );
}

export default EmployeeModal;
