import React, {Component} from 'react';

class Tick extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<div>one {this.props.name}</div>);
    } 
}

export default Tick;