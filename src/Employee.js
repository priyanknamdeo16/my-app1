import React, {Component} from 'react';

class Employee extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (<div>
                    <div>name: {this.props.employee.name}</div>
                    <div>age: {this.props.employee.age}</div>
                </div>);
    }

}

export default Employee;