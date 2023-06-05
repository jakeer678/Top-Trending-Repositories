import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import RepoList from "./components/RepoList";
import RepoDetails from "./components/RepoDetails";
import Navbar from "./components/Navbar";
import PageNotFound from "./components/PageNotFound";
import "./App.css";
import Home from "./components/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/repos" element={<RepoList />} />
        <Route path="/repos/:repoName" element={<RepoDetails />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
