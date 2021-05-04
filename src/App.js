import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
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

      <>
        <Button variant="primary" onClick={handleShow}>
          Launch demo modal
      </Button>

        <Modal show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
          </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
          </Button>
          </Modal.Footer>
        </Modal>
      </>
    </div>
  );
}

export default App;
