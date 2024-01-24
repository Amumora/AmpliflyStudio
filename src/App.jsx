import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import NavbarR from './components/Header';
import Wrapper from './components/Wrapper';



function App() {
  return (
    <Router>
      <div>
        <NavbarR />
        <Wrapper>
          <Routes>
            <Route path="/" element={<Register />} />
            <Route path="/LogIn" element={<Login />} />
            <Route path="/Home" element={<Home />} />
          </Routes>
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;