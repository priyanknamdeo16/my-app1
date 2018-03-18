import React, {Component} from 'react';

class Clock extends Component {
    constructor(props) {
        super(props);
				this.state = {
					timestamp : new Date().getTime()	
				};

				//this.handleTick = this.handleTick.bind(this);
    }

		componentDidMount() {
			//set timer
			this.id = setInterval((e) => {
				this.handleTick(e);
			}, 1000);
		}

		componentWillUnmount() {
			//clear interval
			clearInterval(this.id);
		}

		handleTick (e) {
			this.setState((previousState, props) => {
				return {
					timestamp : new Date().getTime()
				};
			});
		}

		render () {
			return (<div>
				{this.state.timestamp}
			</div>);
		}
}

export default Clock;

