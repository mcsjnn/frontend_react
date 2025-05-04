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
    <div>
      <h1>Admin Board</h1>
      <p>{content}</p>
    </div>
  );
};

export default BoardAdmin;