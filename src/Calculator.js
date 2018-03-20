import React, {Component} from 'react';
import Temprature from './Temprature';

class Calculator extends Component {

 constructor(props) {
     super(props);

     this.state = {
         scale : 'c',
         temprature : 10
     };

     this.onTempratureChangeC = this.onTempratureChangeC.bind(this);
     this.onTempratureChangeF = this.onTempratureChangeF.bind(this);

 }

 onTempratureChangeC(e) {
     this.setState((previousState, props) => ({
         scale : 'c',
         temprature : e
     }));
 }

 onTempratureChangeF(e) {
     this.setState((previousState, props) => ({
         scale : 'f',
         temprature : e
     }));
 }
 
 render() {
     const val1 = this.state.scale === 'f' ? this.state.temprature /2 : this.state.temprature;
     const val2 = this.state.scale === 'c' ? this.state.temprature * 2 : this.state.temprature;
     return (
         <div>
            <Temprature scale="c" tempratureChange={this.onTempratureChangeC} temprature={val1}></Temprature>
            <Temprature scale="f" tempratureChange={this.onTempratureChangeF} temprature={val2}></Temprature>
         </div>
     );
 }
}

export default Calculator;