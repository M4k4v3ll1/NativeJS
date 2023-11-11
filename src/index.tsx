import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {mult, splitIntoWords} from "./nativeJS/01-hello-tests/01";
import {sum} from './nativeJS/03/03'

/*export const sentense = 'Hello my friends!';
const result = splitIntoWords(sentense)
console.log(result[0] === 'Hello')
console.log(result[1] === 'my')
console.log(result[2] === 'friends!')
console.log(sum(2, 3))
console.log(mult(2, 3))*/

let result = sum;
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

