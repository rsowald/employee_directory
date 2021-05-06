import React, { Component } from "react";

import BootstrapTable from 'react-bootstrap-table-next';

class EmployeeContainer extends Component {


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
                    data={this.props.allEmployees}
                    columns={columns}
                    rowEvents={rowEvents}
                />
            </div>
        );
    }
}

export default EmployeeContainer;