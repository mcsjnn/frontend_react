import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = ({ currentUser, onLogout }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Web AES
        </Typography>
        {currentUser ? (
          <>
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
            <Button color="inherit" onClick={onLogout}>
              Cerrar Sesión
            </Button>
          </>
        ) : (
          <>
            <Button color="inherit" component={Link} to="/login">
              Iniciar Sesión
            </Button>
            <Button color="inherit" component={Link} to="/register">
              Registrarse
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;