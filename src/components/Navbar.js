import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useLogout } from "../hooks/useLogout";
import './Navbar.css'


const Navbar = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { logout } = useLogout();

  const handleLogout = async () => {
    await logout();
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
