import React, { useState } from "react";
import AuthService from "../services/auth.service";

const Register = () => {
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await AuthService.register(formData);
      setMessage("Registration successful! You can now log in.");
    } catch (err) {
      setMessage("Error during registration.");
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <input type="text" placeholder="Username" value={formData.username} onChange={(e) => setFormData({ ...formData, username: e.target.value })} required />
      <input type="email" placeholder="Email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
      <input type="password" placeholder="Password" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} required />
      <button type="submit">Register</button>
      {message && <p>{message}</p>}
    </form>
  );
};

export default Register;