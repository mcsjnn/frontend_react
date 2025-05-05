import React from "react";
import { Container, Box, Typography, Card, CardContent, Avatar } from "@mui/material";

const Profile = ({ currentUser }) => {
  // Generar iniciales del nombre de usuario para el avatar
  const getInitials = (name) => {
    return name
      .split(" ")
      .map((word) => word[0].toUpperCase())
      .join("");
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <Card
        sx={{
          p: 3,
          borderRadius: "16px",
          boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
          textAlign: "center",
        }}
      >
        <Avatar
          sx={{
            width: 80,
            height: 80,
            margin: "0 auto",
            bgcolor: "primary.main",
            fontSize: "2rem",
          }}
        >
          {getInitials(currentUser.username)}
        </Avatar>
        <CardContent>
          <Typography variant="h4" gutterBottom>
            {currentUser.username}
          </Typography>
          <Typography variant="body1" color="text.secondary" gutterBottom>
            {currentUser.email}
          </Typography>
          <Box
            sx={{
              mt: 2,
              p: 2,
              border: "1px solid #ddd",
              borderRadius: "8px",
              backgroundColor: "#f9f9f9",
            }}
          >
            <Typography variant="h6" color="text.primary">
              <strong>Roles:</strong> {currentUser.roles.join(", ")}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Profile;