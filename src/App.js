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
import ProtectedRoute from "./components/ProtectedRoute"; // Importa el componente ProtectedRoute
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [currentUser, setCurrentUser] = useState(AuthService.getCurrentUser());

  const handleLogout = () => {
    AuthService.logout();
    setCurrentUser(null);
    toast.info("Has cerrado sesión correctamente.");
  };

  const handleLoginSuccess = (user) => {
    setCurrentUser(user);
    toast.success(`Bienvenido, ${user.username}!`);
  };

  return (
    <>
      <ToastContainer />
      <Router>
        <Navbar currentUser={currentUser} onLogout={handleLogout} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={<Login setCurrentUser={handleLoginSuccess} />}
          />
          <Route path="/register" element={<Register />} />
          <Route
            path="/profile"
            element={
              currentUser ? (
                <Profile currentUser={currentUser} />
              ) : (
                <h1>Por favor, inicia sesión</h1>
              )
            }
          />
          <Route
            path="/admin"
            element={
              <ProtectedRoute allowedRoles={["ROLE_ADMIN"]} currentUser={currentUser}>
                <BoardAdmin />
              </ProtectedRoute>
            }
          />
          <Route
            path="/mod"
            element={
              <ProtectedRoute allowedRoles={["ROLE_MODERATOR"]} currentUser={currentUser}>
                <BoardModerator />
              </ProtectedRoute>
            }
          />
          <Route
            path="/user"
            element={
              <ProtectedRoute allowedRoles={["ROLE_USER"]} currentUser={currentUser}>
                <BoardUser />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;