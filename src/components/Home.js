import React, { useEffect, useState } from "react";
import UserService from "../services/user.service";

const Home = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    UserService.getPublicContent()
      .then((response) => {
        setContent(response.data);
      })
      .catch((error) => {
        setContent(
          (error.response && error.response.data && error.response.data.message) ||
            error.message ||
            "Error al cargar el contenido público."
        );
      });
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <p>{content}</p>
    </div>
  );
};

export default Home;