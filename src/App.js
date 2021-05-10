import React, { useState, useEffect } from "react";
import EmployeeContainer from "./components/EmployeeContainer";
import Hero from "./components/Hero";
import EmployeeModal from "./components/EmployeeModal";
import Search from "./components/Search";
import getEmployees from "./utils/API";
import Guide from "./components/Guide";



function App() {
  const [employee, setShowModal] = useState();
  const [allEmployees, setAllEmployees] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [filteredEmployees, setFilteredEmployees] = useState([]);

  const handleClose = () => setShowModal(undefined);
  const handleShow = (employee) => setShowModal(employee);
  const handleDelete = (employee) => {
    setAllEmployees(allEmployees.filter(e => e.id !== employee.id));
    handleClose();
  };

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
      <Hero >
        <h1>My Employee Dashboard</h1>
      </Hero>
      <div className="row">
        <div className="col-sm-12 col-md-3">
          <Guide />
          <Search search={searchValue} handleInputChange={e => { setSearchValue(e.target.value) }} />
        </div>
        <div className="col-sm-12 col-md-9">
          <EmployeeContainer showModal={handleShow} allEmployees={searchValue.length ? filteredEmployees : allEmployees} />
        </div>
        <EmployeeModal employee={employee} handleClose={handleClose} handleDelete={handleDelete} />
      </div>
    </div>
  );
}

export default App;
