import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import Home from './Home';
import Effect from './Home';
import Login from './login';
import Product from './Product';
import 'bootstrap/dist/css/bootstrap.min.css';
import Registration from './Registration';
import BasicForm from './BasicForm';
import FormikForm from './FormikForm';
import EMP from './EMP';
import EMPWITHYUP from './EMPWITHYUP';
import MyExample from './MyExample';
import TokenLogin from './TokenLogin';
import TokenAccount from './TokenAccount';
import './TokenGlobal'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TokenLogin />
    <TokenAccount />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
