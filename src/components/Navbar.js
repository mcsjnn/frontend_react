import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ currentUser, onLogout }) => {
  return (
    <nav>
      <Link to="/">Home</Link>
      {currentUser ? (
        <>
          <Link to="/profile">Profile</Link>
          {currentUser.roles.includes("ROLE_ADMIN") && <Link to="/admin">Admin Board</Link>}
          {currentUser.roles.includes("ROLE_MODERATOR") && <Link to="/mod">Moderator Board</Link>}
          <button onClick={onLogout}>Logout</button>
        </>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </>
      )}
    </nav>
  );
};

export default Navbar;