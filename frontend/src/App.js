import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
// import 'antd/dist/antd.css'; 
import GroceryStores from './components/pages/GroceryStores';
import SignUp from './components/pages/SignUp';



function App() {
  return (
    <>
      <Router>
       <Navbar/>
        <Switch>
         <Route path='/' exact component={Home}/>
         <Route path='/grocerystores' exact component={GroceryStores}/>
         <Route path='/signup' exact component={SignUp}/>
        </Switch>
      </Router>
    </>
  )
}

export default App;
