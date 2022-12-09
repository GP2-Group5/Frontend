import React from 'react'
import { useState, useEffect } from 'react'
import { Navigate, BrowserRouter, Routes, Route } from 'react-router-dom';

import axios from 'axios'

import './App.css'

import Login from './pages/Login'
import Sidebar from './components/Sidebar'
import Userlist from './pages/Userlist'
import Detail from './pages/Detail'
import Dashboard from './pages/Dashboard'
import Menteelist from './pages/Menteelist';
import Addmentee from './pages/Addmentee';
import Class from "./pages/Class";
import AddUser from "./pages/AddUser";
// import Register from "./pages/Register";
import AddClass from "./pages/AddClass";

function App() {

  return (
    // <button className='btn btn-primary' onClick={postProject}>POST</button>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/addmentee" element={<Addmentee />} />
        <Route path="/menteelist" element={<Menteelist />} />
        <Route path="/userlist" element={<Userlist />} />
        <Route path="/class" element={<Class />} />
        <Route path="/adduser" element={<AddUser />} />
        <Route path="/addclass" element={<AddClass />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
