import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = ({ currentUser, onLogout }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        {/* Título que redirige a la página de inicio */}
        <Typography
          variant="h6"
          sx={{ flexGrow: 1, textDecoration: "none", color: "inherit" }}
          component={Link}
          to="/"
        >
          {currentUser ? `Bienvenido, ${currentUser.username}` : "Web AES"}
        </Typography>
        <Box sx={{ display: "flex", gap: 2 }}>
          {currentUser ? (
            <>
              {/* Botones dinámicos según el rol del usuario */}
              {currentUser.roles.includes("ROLE_ADMIN") && (
                <Button color="inherit" component={Link} to="/admin">
                  Admin Board
                </Button>
              )}
              {currentUser.roles.includes("ROLE_MODERATOR") && (
                <Button color="inherit" component={Link} to="/mod">
                  Moderator Board
                </Button>
              )}
              {currentUser.roles.includes("ROLE_USER") && (
                <Button color="inherit" component={Link} to="/user">
                  User Board
                </Button>
              )}
              {/* Botón para ver el perfil */}
              <Button color="inherit" component={Link} to="/profile">
                Perfil
              </Button>
              {/* Botón para cerrar sesión */}
              <Button color="inherit" onClick={onLogout}>
                Cerrar Sesión
              </Button>
            </>
          ) : (
            <>
              {/* Botones para usuarios no autenticados */}
              <Button color="inherit" component={Link} to="/login">
                Iniciar Sesión
              </Button>
              <Button color="inherit" component={Link} to="/register">
                Registrarse
              </Button>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;