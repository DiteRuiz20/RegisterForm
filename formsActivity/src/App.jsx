import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css'
import Form from './components/Form'
import Login from './components/Login'

function Home() {
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
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
          </Routes>
      </Router>
  );
}

export default App
