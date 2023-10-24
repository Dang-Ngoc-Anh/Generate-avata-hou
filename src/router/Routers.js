import React from "react";
import { Routes, Navigate, Route } from "react-router-dom";
import Home from "../pages/Home";
import CreateAvata from "../pages/CreateAvata";
import Login from "../pages/Login";
import Frame from "../pages/Frame";
import FixSizeImg from "../pages/FixSizeImg";
const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/create-frame" element={<Frame />} />
      <Route path="/create-avata" element={<CreateAvata />} />
      <Route path="/create-avata/:id" element={<CreateAvata />} />
      <Route path="/home/custem" element={<FixSizeImg />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default Routers;
