import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Container from './Container'
import 'bootstrap'
import 'popper.js/dist/popper.min.js'
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'datatables.net/js/jquery.dataTables.min.js'
import 'datatables.net-dt/css/jquery.dataTables.min.css'
import './css/style.css';

ReactDOM.render(<Container />, document.getElementById('container'))