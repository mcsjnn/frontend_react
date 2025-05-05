import React, { useEffect, useState } from "react";
import UserService from "../services/user.service";

const BoardModerator = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    UserService.getModeratorBoard()
      .then((response) => {
        setContent(response.data);
      })
      .catch((error) => {
        setContent(
          (error.response && error.response.data && error.response.data.message) ||
          error.message ||
          "Error al cargar el contenido del moderador."
        );
      });
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Panel de Moderadores</h1>
      <p>Bienvenido al panel de moderadores. Aquí puedes gestionar contenido y moderar actividades.</p>
      <div style={{ marginTop: "20px", padding: "10px", border: "1px solid #ccc", borderRadius: "8px" }}>
        <h2>Contenido del Moderador</h2>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default BoardModerator;