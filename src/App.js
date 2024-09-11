import React from 'react'
import Home from "./pages/Home.js";
import Uploadresumes from "./pages/Uploadresumes.js";
import Applicantpool from "./pages/Applicantpool.js";
import Empresumesssist from "./pages/Empresumesssist.js";
import './App.css';
import {Routes,BrowserRouter,Route} from 'react-router-dom'


function App() {
  return (
    <div >

      <BrowserRouter>
        <Routes>
          <Route  path="/" element={<Home/>} ></Route>
          <Route  path="/Home" element={<Home/>} ></Route>
          <Route  path="/Upload-Details" element={<Uploadresumes/>} ></Route>
          <Route  path="/Applicant-Pool" element={<Applicantpool/>} ></Route>
          <Route  path="/Emp-Resume-Assist" element={<Empresumesssist/>} ></Route>
        </Routes>
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
