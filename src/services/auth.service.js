import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

const register = (data) => axios.post(API_URL + "signup", data);

const login = async (username, password) => {
  const response = await axios.post(API_URL + "signin", { username, password });
  if (response.data.accessToken) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => JSON.parse(localStorage.getItem("user"));

export default { register, login, logout, getCurrentUser };