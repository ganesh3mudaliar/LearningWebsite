
import './App.css';
// import {Route, Routes} from "react-router-dom";
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/pages/Home"
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Signup from './components/pages/Signup';
import Login from './components/pages/Login';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Courses from './components/pages/Courses';
import Tutors from './components/pages/Tutors';
import Community from './components/pages/Community';



function App() {
  

  return (
    
    <div className="w-screen min-h-screen bg-richblack-900 flex flex-col font-inter">
    <Router>
        

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/components/pages/Signup" element={<Signup />} />
          <Route path="/components/pages/Login" element={<Login />}/> 
          <Route path="/components/pages/About" element={<About />}/> 
          <Route path="/components/pages/Contact" element={<Contact />}/> 
          <Route path="/components/pages/Courses" element={<Courses />}/> 
          <Route path="/components/pages/Tutors" element={<Tutors />}/> 
          <Route path="/components/pages/Community" element={<Community />}/> 
          
          


        </Routes>

        <Footer/>

        
      
    </Router>

 
    </div>
   );
}

export default App;
