import axios from "axios";

const API_URL = "http://localhost:3000/api/test/";

const getPublicContent = () => axios.get(API_URL + "all");

const getUserBoard = () => axios.get(API_URL + "user", { headers: authHeader() });

const getModeratorBoard = () => axios.get(API_URL + "mod", { headers: authHeader() });

const getAdminBoard = () => axios.get(API_URL + "admin", { headers: authHeader() });

const authHeader = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return user && user.accessToken ? { Authorization: "Bearer " + user.accessToken } : {};
};

export default { getPublicContent, getUserBoard, getModeratorBoard, getAdminBoard };