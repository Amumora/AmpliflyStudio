import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import  Actual from './App.jsx';
import NavbarR from './components/Header/index.jsx';
import Wrapper from './components/Wrapper/index.jsx';



function App() {
  return (
    <Router>
      <div>
        <NavbarR />
        <Wrapper>
          <Routes>
            <Route path="/" element={<Register />} />
            <Route path="/LogIn" element={<Login />} />
            <Route path="/Actual" element={<Actual />} />
          </Routes>
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;