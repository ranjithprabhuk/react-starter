import React from 'react';
import ReactDOM from 'react-dom';
import BasicExample from './app/app.component.jsx';


 
document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(React.createElement(BasicExample),document.getElementById("ReactApp"));
});