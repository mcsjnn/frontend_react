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
    <div>
      <h1>Moderator Board</h1>
      <p>{content}</p>
    </div>
  );
};

export default BoardModerator;