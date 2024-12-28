import React ,{ useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Connect';
import DirectionPage from './pages/Direction';
import TeacherPage from './pages/Formateur';
import StudentPage from './pages/Student';
import InfoPage from './pages/Info';

const App = () => {
  
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <div className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/info" element={<InfoPage/>} />
            <Route path="/direction" element={<DirectionPage />} />
            <Route path="/formateur" element={<TeacherPage />} />
            <Route path="/student" element={<StudentPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
