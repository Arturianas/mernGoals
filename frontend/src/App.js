import React from 'react';
import { Routes, Route } from "react-router-dom";
import { useSelector } from 'react-redux';
//toast
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';


function App() {


  const {user} = useSelector((state) => state.auth);
  return (
    
      <div className={user? 'container' : 'nonUserContainer'}>
        <Header/>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </div>
    
  );
}

export default App;
