import React from "react";
import Navbar from  "./components/Navbar";
import Cards from "./components/Cards"
import Filter from "./components/Filter"
import { apiUrl, filterData  } from "./data";
import { useState,useEffect } from "react";
// import Spinner from "./components/Spinner";
import {toast} from "react-toastify";
import { filter } from "./data2";
import CourseDetails from "./components/CourseDetails";
import Home from "./Home";
import HomePage from './pages/HomePage'
import { Route, Routes } from 'react-router-dom';
// import Filter from "./components/data2";

import DashBoard from "./pages/DashBoard";
const App = () => { 
 
 

   return (
  

    <Routes>
        
    <Route path="/courses/:courseId/:category" element = {<CourseDetails filter={filter} />} />
    
    
    <Route path="/" exact element={<HomePage/>} />
    <Route path="/courses" element={<Home/>}/>
    <Route path="/dashboard" element={<DashBoard/>}/>
 
   
</Routes>
  );
};

export default App;
