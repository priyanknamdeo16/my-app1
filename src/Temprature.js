import React, {Component} from 'react';

class Temprature extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.tempratureChange(e.target.value);
    }

    render() {
        const temprature = this.props.temprature;
        return (
            <div>
                <input value={temprature} onChange={this.handleChange}/>
            </div>
        );
    }
}

export default Temprature;