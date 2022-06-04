import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useparams,
} from "react-router-dom";
import axios from "axios";
import Home from "./Components/Home";
import StudentList from "./Components/Studentlist";
import Addstudent from "./Components/Addstudent";
import Studentdetail from "./Components/Studentdetail";
import Navbar from "./Components/Navbar";
import Error from "./Components/Error";

import { useState, useEffect, useContext } from "react";
// const StudentContext = React.createContext();

let url = "http://192.168.49.2:30336";
const App = () => {
  const Addstud = (studData) => {
    const json = JSON.stringify(studData);
    console.log(json);
    axios.post(url + "/api/students", json).then((res) => {
      console.log(res);
    });
  };

  return (
    // <StudentContext.Provider value={{ setstud }}>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/api/students" element={<StudentList />} />
        <Route path="/add" element={<Addstudent onAdd={Addstud} />} />
        <Route path="/api/students/:Id" element={<Studentdetail />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
    // </StudentContext.Provider>
  );
};

export default App;
