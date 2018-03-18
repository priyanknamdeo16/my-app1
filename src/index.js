import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
//import App from './App';
import Tick from './Tick';
import registerServiceWorker from './registerServiceWorker';
import EmployeeList from './EmployeeList';

//const elemet = <h1>hey sguys</h1>;
ReactDOM.render(<Tick name="priyank" />, document.getElementById('root'));
//ReactDOM.render(elemet, document.getElementById('root'));

const list = [{name: 'priyank', age: 20}, {name: 'namdeo', age: 40}];

ReactDOM.render(<EmployeeList employees={list}/>, document.getElementById('root'));

//functional components returning from function -> this.props.name dont work
// function Sara(props) {
//     return <h1>hello {props.name}</h1>;
// }

// ReactDOM.render(<Sara name="priyank1" />, document.getElementById('root'));

//Execute timer
// function executeTimer() {
//    // ReactDOM.render(<h1>{new Date().getTime()}</h1>, document.getElementById('root'));    
// }

// setInterval(() => {
//     executeTimer();
// }, 1000);

registerServiceWorker();
