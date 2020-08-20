import _ from 'lodash';
import './styles.css'
import { App } from './button'
import ReactDOM from "react-dom";
import React from "react";

// function component() {
//     const element = document.createElement('div');
  
//     // Lodash, now imported by this script
//     element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//     element.id = 'root'
//     element.classList.add('hello')
    
//     return element;
//   }
  
// document.body.appendChild(component());

ReactDOM.render(<App />, document.querySelector("#root"));