import React, { useEffect, useState } from "react";
import UserService from "../services/user.service";

const BoardUser = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    UserService.getUserBoard()
      .then((response) => {
        setContent(response.data);
      })
      .catch((error) => {
        setContent(
          (error.response && error.response.data && error.response.data.message) ||
          error.message ||
          "Error al cargar el contenido del usuario."
        );
      });
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Panel de Usuarios</h1>
      <p>Bienvenido al panel de usuarios. Aquí puedes acceder a tus datos y funcionalidades disponibles.</p>
      <div style={{ marginTop: "20px", padding: "10px", border: "1px solid #ccc", borderRadius: "8px" }}>
        <h2>Contenido del Usuario</h2>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default BoardUser;