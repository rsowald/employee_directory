import React, { Component } from "react";
import { Table } from "react-bootstrap";
import getEmployees from "../../utils/API";

class EmployeeContainer extends Component {
    state = {
        employees: [],
        sort: ""
    };

    componentDidMount = () => {
        getEmployees()
            .then((res) => {
                const employees = res.data.results.map((employee, i) => ({
                    ...employee,
                    id: i + 1
                }));
                this.setState({ employees })
            })
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div className="container-fluid">
                <Table bordered hover>
                    <thead>
                        <tr>
                            <th>Employee ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.employees.map(employee =>
                            <tr key={employee.id} onClick={() => this.props.showModal(employee)}>
                                <td>{employee.id}</td>
                                <td>{employee.name.first}</td>
                                <td>{employee.name.last}</td>
                                <td>{employee.email}</td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default EmployeeContainer;