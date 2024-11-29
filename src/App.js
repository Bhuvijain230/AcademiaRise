import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MentorConnect from "./PeerConnect/MentorConnect";
import AcademiaRise from "./components/AcademiaRise"; // Your Home page component
import { Events } from "./EventManagement/Events";
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './Signup';
import Login from './Login';
function App() {
  return (
    
    <Router>
      {/* <div>
    <Signup/>
   </div> */}
      <Routes>
        <Route path="/AcademiaRise" element={<AcademiaRise />} />
        <Route path="/MentorConnect" element={<MentorConnect />} />  
        <Route path="/Events" element ={<Events/>}/>  
        <Route path="/Signup" element = {<Signup/>}/> 
        <Route path="/login" element = {<Login/>}/>  
      </Routes>
    </Router>
  
  );
}

export default App;
