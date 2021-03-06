// ANTES
// import React from "react";
// import ReactDOM from "react-dom";
// // import PrimeraApp from "./PrimeraApp";
// import CounterApp from "./CounterApp";
// import './index.css';

// const divRoot = document.getElementById("root");
// ReactDOM.render(<CounterApp value= { 10 } />, divRoot);

// REACT +18
import React from 'react';
import { createRoot } from 'react-dom/client';
// import PrimeraApp from "./PrimeraApp";
import CounterApp from './CounterApp';
import './index.css';

const divRoot = document.getElementById('root');
const root = createRoot(divRoot);
root.render(<CounterApp value={10} />);
