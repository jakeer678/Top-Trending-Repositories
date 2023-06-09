import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./components/Home";

import Login from "./components/Login";
import Navbar from "./components/Navbar";
import RepoList from "./components/RepoList";
import './App.css'
import RepoDetails from "./components/RepoDetails";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/repos" element={<RepoList />} />
        <Route path="/repos/:name" element={<RepoDetails />} />
        <Route path="/login" element={<Login />} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;
