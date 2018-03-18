import React, {Component} from 'react';

import Employee from './Employee';
class EmployeeList extends Component {
    constructor(props) {
        debugger;
        super(props);
    }
    render () {
        return (
            <ul>
                {this.props.employees.map(employee => (
                    <Employee key={employee.age} employee={employee}></Employee>
                ))}
            </ul>
        );
    }
}

export default EmployeeList;