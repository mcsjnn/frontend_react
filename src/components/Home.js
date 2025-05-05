import React, { useEffect, useState } from "react";
import UserService from "../services/user.service";
import { Container, Box, Typography, Paper, Grid, Card, CardContent, Button } from "@mui/material";

const Home = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    UserService.getPublicContent()
      .then((data) => setContent(data))
      .catch((error) => setContent(error.message));
  }, []);

  return (
    <Container maxWidth="lg" sx={{ mt: 8 }}>
      <Paper
        elevation={4}
        sx={{
          p: 4,
          borderRadius: "16px",
          boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
          textAlign: "center",
          backgroundColor: "#f5f5f5",
        }}
      >
        <Typography variant="h3" gutterBottom>
          ¡Bienvenido!
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
            backgroundColor: "#ffffff",
          }}
        >
          <Typography variant="h6" color="text.primary">
            Explora las funcionalidades de la aplicación según tu rol.
          </Typography>
        </Box>
      </Paper>

      <Grid container spacing={4} sx={{ mt: 6 }}>
        <Grid item xs={12} sm={6} md={4}>
          <Card elevation={3}>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Funcionalidad 1
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Accede a las herramientas y recursos disponibles para tu rol.
              </Typography>
              <Button
                variant="contained"
                color="primary"
                sx={{ mt: 2 }}
                fullWidth
              >
                Ver más
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card elevation={3}>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Funcionalidad 2
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Descubre las opciones avanzadas que puedes utilizar.
              </Typography>
              <Button
                variant="contained"
                color="primary"
                sx={{ mt: 2 }}
                fullWidth
              >
                Ver más
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;