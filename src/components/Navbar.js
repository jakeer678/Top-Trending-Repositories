import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const user = localStorage.getItem("idToken");
  const navigate = useNavigate();
  console.log(user, "user");

  const handleLogout = async () => {
    localStorage.removeItem("idToken");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <ul className="nav-menu">
        <li className="nav-item">
          <NavLink to="/">Home</NavLink>
        </li>

        {user && (
          <li className="nav-item">
            <NavLink to="/repos">RepoList</NavLink>
          </li>
        )}

        {user && (
          <li className="nav-item" onClick={handleLogout}>
            <NavLink>Logout</NavLink>
          </li>
        )}

        {!user && (
          <li className="nav-item">
            <NavLink to="/login">Login</NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
