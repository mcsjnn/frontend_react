import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL + "/test/";

const getPublicContent = async () => {
  try {
    const response = await axios.get(API_URL + "all");
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Error al cargar el contenido público."
    );
  }
};

const getUserBoard = () => axios.get(API_URL + "user", { headers: authHeader() });

const getModeratorBoard = () => axios.get(API_URL + "mod", { headers: authHeader() });

const getAdminBoard = () => axios.get(API_URL + "admin", { headers: authHeader() });

const authHeader = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return user && user.accessToken ? { Authorization: "Bearer " + user.accessToken } : {};
};

export default { getPublicContent, getUserBoard, getModeratorBoard, getAdminBoard };