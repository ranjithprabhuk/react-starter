import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './app/Counter';
import ReactApp from './app/app.component.jsx';


 
document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(React.createElement(ReactApp),document.getElementById("ReactApp"));
});