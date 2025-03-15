import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css'
import Form from './components/Form'
import Login from './components/Login'
import Home from './components/Home'

function Register() {
  const navigate = useNavigate();

  return (
    <>
    <Form/>
    </>
  )
}

function App() {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/home" element={<Home />} />
          </Routes>
      </Router>
  );
}

export default App
