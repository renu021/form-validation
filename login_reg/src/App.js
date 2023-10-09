import React from "react";
import './index.css';
import { Routes, Route } from "react-router-dom";
import Home from "./route/Home";
import Register from "./route/Register";
import Login from "./route/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
