import React, { useState, useEffect } from "react";
import EmployeeContainer from "./components/EmployeeContainer";
import Hero from "./components/Hero";
import EmployeeModal from "./components/EmployeeModal";
import Search from "./components/Search";
import getEmployees from "./utils/API";



function App() {
  const [employee, setShowModal] = useState();
  const [allEmployees, setAllEmployees] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [filteredEmployees, setFilteredEmployees] = useState([]);

  const handleClose = () => setShowModal(undefined);
  const handleShow = (employee) => setShowModal(employee);

  useEffect(() => {
    getEmployees()
      .then((res) => {
        const employees = res.data.results.map((employee, i) => ({
          ...employee,
          id: i + 1
        }));
        setAllEmployees(employees)
        setFilteredEmployees(employees)
      })
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    setFilteredEmployees(allEmployees.filter((employee) => {
      return employee.name.first.includes(searchValue) || employee.name.last.includes(searchValue) || employee.email.includes(searchValue)
    }))
  }, [searchValue, allEmployees]);

  return (
    <div className="container-fluid">
      <Hero backgroundImage="./images/teamwork.jpg">
        <h1>My Employee Dashboard</h1>
      </Hero>
      <div className="row">
        <div className="col-3">
          <Search search={searchValue} handleInputChange={e => { setSearchValue(e.target.value) }} />
        </div>
        <div className="col-9">
          <EmployeeContainer showModal={handleShow} allEmployees={searchValue.length ? filteredEmployees : allEmployees} />
        </div>
        <EmployeeModal employee={employee} handleClose={handleClose} />
      </div>
    </div>
  );
}

export default App;
