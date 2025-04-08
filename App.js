import React from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Menu from './pages/Menu';
import Cart from './pages/Cart';

import "./App.css";


const App = () => {
  return (
    <Router>
        <Navbar/>
        <Routes>
            <Route path="/Home" element={<Home/>} />
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>} />
            <Route path="/Menu" element={<Menu/>} />
            <Route path="/Cart" element={<Cart/>} />
            
        </Routes>
    </Router>
  )
}

export default App