import React, { useState } from "react";
import EmployeeContainer from "./components/EmployeeContainer";
import Hero from "./components/Hero";
import EmployeeModal from "./components/EmployeeModal";



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

      <EmployeeModal employee={employee} handleClose={handleClose} />

    </div>
  );
}

export default App;
