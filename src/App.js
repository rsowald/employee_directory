import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import EmployeeContainer from "./components/EmployeeContainer";
import Hero from "./components/Hero";
import dateFormat from "dateformat";
//import pages and components


function App() {
  const [employee, setShowModal] = useState();

  const handleClose = () => setShowModal(undefined);
  const handleShow = (employee) => setShowModal(employee);


  return (
    <div>
      <Hero backgroundImage="./images/teamwork.jpg">
        <h1>My Employee Dashboard</h1>
      </Hero>

      <EmployeeContainer showModal={handleShow} />

      <Modal show={employee} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{employee?.name.first} {employee?.name.last}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img className="mr-1 center block" src={employee?.picture.large} alt="portrait"></img>
          Birthday: {dateFormat(employee?.dob.date, "longDate")}<br />
          Phone: {employee?.phone}<br />
          Cell: {employee?.cell}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={handleClose}>
            Remove Employee
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default App;
