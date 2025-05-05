import React, { useEffect, useState } from "react";
import UserService from "../services/user.service";

const BoardAdmin = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    UserService.getAdminBoard()
      .then((response) => {
        setContent(response.data);
      })
      .catch((error) => {
        setContent(
          (error.response && error.response.data && error.response.data.message) ||
          error.message ||
          "Error al cargar el contenido del administrador."
        );
      });
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Panel de Administración</h1>
      <p>Bienvenido al panel de administración. Aquí puedes gestionar usuarios, roles y más.</p>
      <div style={{ marginTop: "20px", padding: "10px", border: "1px solid #ccc", borderRadius: "8px" }}>
        <h2>Contenido del Administrador</h2>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default BoardAdmin;