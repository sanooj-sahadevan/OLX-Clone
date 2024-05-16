/* eslint-disable no-unused-vars */
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import AddProduct from "./Pages/AddProduct";
import View from "./Pages/ViewPost";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/addProduct" element={<AddProduct />} />
          <Route path="/view" element={<View />} />
          <Route path="/product-details/:id" element={<View />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
