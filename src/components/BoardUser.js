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
    <div>
      <h1>User Board</h1>
      <p>{content}</p>
    </div>
  );
};

export default BoardUser;