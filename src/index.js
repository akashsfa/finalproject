import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import axios from 'axios';
import './design.css';

import Login from './DeliveryMan/login';
import Header from './DeliveryMan/header';
import Dashboard from './DeliveryMan/dashboard';
import Orderlist from './DeliveryMan/Index2';
import OrderConfirm from './DeliveryMan/OrderConfirm';
import Logout from './DeliveryMan/Logout';



axios.defaults.baseURL="http://localhost:8000/api";


 ReactDOM.render(

  <React.StrictMode>

      <Router>

      <Switch>

        <Route exact path='/'>
  
        <Login/>

      </Route>
        <Route exact path='/dashboard'>
          <Header/>
          <Dashboard/>

        </Route>

        <Route exact path='/orderlist'>
          <Header/>
          <Orderlist/>

        </Route>
        
        <Route exact path='/OrderConfirm/:id/:product/:phone'>
        <Header/>
          <OrderConfirm/>
        </Route>

        <Route exact path='/logout'>
          <Logout/>
        </Route>


      </Switch>

    </Router>

  </React.StrictMode>,

  document.getElementById('root')

);


reportWebVitals();
