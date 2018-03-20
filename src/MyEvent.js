import React, {Component} from 'react';

class MyEvent extends Component {
    constructor (props) {
        super(props);
        this.state = {
            toggle: true
        };
        this.clickHandler = this.clickHandler.bind(this);
    }
		
    clickHandler () {
        this.setState(previousState => ({
						toggle : !previousState.toggle
			}));
    }

    render () {
        return (
            <div>
                <button onClick={this.clickHandler}> {this.state.toggle ? 'ON' : 'OFF'} </button>
            </div>
        );
    }
}

export default MyEvent;