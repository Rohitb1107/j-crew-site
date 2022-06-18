import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Kids from "./Kids";
import Mens from "./Mens";
import Navbar from "./Navbar";
import Womens from "./Womens";

const AllRoutes = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/mens" element={<Mens />}></Route>
        <Route path="/womens" element={<Womens />}></Route>
        <Route path="/kids" element={<Kids />}></Route>
      </Routes>
    </div>
  );
};

export default AllRoutes;
