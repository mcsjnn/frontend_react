import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";
import BoardAdmin from "./components/BoardAdmin";
import BoardModerator from "./components/BoardModerator";
import BoardUser from "./components/BoardUser";
import Home from "./components/Home";
import AuthService from "./services/auth.service";

const App = () => {
  const [currentUser, setCurrentUser] = useState(AuthService.getCurrentUser());

  const handleLogout = () => {
    AuthService.logout();
    setCurrentUser(null);
  };

  return (
    <Router>
      <Navbar currentUser={currentUser} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setCurrentUser={setCurrentUser} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={currentUser ? <Profile currentUser={currentUser} /> : <h1>Please log in</h1>} />
        <Route path="/admin" element={<BoardAdmin />} />
        <Route path="/mod" element={<BoardModerator />} />
        <Route path="/user" element={<BoardUser />} />
      </Routes>
    </Router>
  );
};

export default App;