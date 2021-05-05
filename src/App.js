import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import EmployeeContainer from "./components/EmployeeContainer";
import Hero from "./components/Hero"
//import pages and components


function App() {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <div>
      <Hero backgroundImage="./teamwork.jpg">
        <h1>My Employee Dashboard</h1>
      </Hero>
      <EmployeeContainer />
      <>
        <Button variant="primary" onClick={handleShow}>
          Employee Names will be modal triggers
      </Button>

        <Modal show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Employee Name Here</Modal.Title>
          </Modal.Header>
          <Modal.Body>All of the employee info</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
          </Button>
            <Button variant="danger" onClick={handleClose}>
              Remove Employee
          </Button>
          </Modal.Footer>
        </Modal>
      </>
    </div>
  );
}

export default App;
