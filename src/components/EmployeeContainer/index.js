import React, { Component } from "react";

import getEmployees from "../../utils/API";
import BootstrapTable from 'react-bootstrap-table-next';

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

        const columns = [{
            dataField: 'id',
            text: 'Employee ID',
            sort: true
        }, {
            dataField: 'name.first',
            text: 'First Name',
            sort: true
        }, {
            dataField: 'name.last',
            text: 'Last Name',
            sort: true
        }];

        const rowEvents = {
            onClick: (_, employee) => {
                this.props.showModal(employee);
            }
        };

        return (
            <div className="container-fluid">
                <BootstrapTable
                    bootstrap4
                    keyField="id"
                    data={this.state.employees}
                    columns={columns}
                    rowEvents={rowEvents}
                />
            </div>
        );
    }
}

export default EmployeeContainer;