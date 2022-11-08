import React from 'react';
import logo from './logo.svg';



import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import Login from './component/login';
import Regster from './component/Register ';
import Home from './component/home';
import axios from 'axios';
axios.defaults.baseURL="http://localhost:8000/";
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.withCredentials = true;
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/login" element={<Login/>} />
            <Route exact path="/register" element={<Regster/>} />
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
