import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  const isLogin = localStorage.getItem("idToken");
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <nav className="navbar">
      {console.log(isLogin, "oooooooooo")}
      <ul className="nav-menu">
        <li className="nav-item">
          <NavLink to="/">Home</NavLink>
        </li>

        {isLogin && (
          <li className="nav-item">
            <NavLink to="/repos">RepoList</NavLink>
          </li>
        )}
        {isLogin && (
          <li className="nav-item">
            <NavLink to="/repos/:name">RepoDetails</NavLink>
          </li>
        )}
        {isLogin && (
          <li className="nav-item" onClick={logout}>
            <NavLink>Logout</NavLink>
          </li>
        )}
        {!isLogin && (
          <li className="nav-item">
            <NavLink to="/login">Login</NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
