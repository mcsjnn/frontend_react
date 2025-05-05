import React, { useEffect, useState } from "react";
import UserService from "../services/user.service";
import { Container, Box, Typography, Paper } from "@mui/material";

const Home = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    UserService.getPublicContent()
      .then((data) => setContent(data))
      .catch((error) => setContent(error.message));
  }, []);

  return (
    <Container maxWidth="md" sx={{ mt: 8 }}>
      <Paper
        elevation={3}
        sx={{
          p: 4,
          borderRadius: "16px",
          boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
          textAlign: "center",
        }}
      >
        <Typography variant="h3" gutterBottom>
          Bienvenido a la Aplicación
        </Typography>
        <Typography variant="body1" color="text.secondary" gutterBottom>
          {content}
        </Typography>
        <Box
          sx={{
            mt: 4,
            p: 2,
            border: "1px solid #ddd",
            borderRadius: "8px",
            backgroundColor: "#f9f9f9",
          }}
        >
          <Typography variant="h6" color="text.primary">
            Explora las funcionalidades de la aplicación según tu rol.
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default Home;