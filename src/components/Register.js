import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { TextField, Button, Typography, Container, Box } from "@mui/material";
import AuthService from "../services/auth.service";
import { toast } from "react-toastify";

const Register = () => {
  const validationSchema = Yup.object({
    username: Yup.string().required("El nombre de usuario es obligatorio"),
    email: Yup.string().email("Correo inválido").required("El correo es obligatorio"),
    password: Yup.string()
      .min(8, "La contraseña debe tener al menos 8 caracteres")
      .required("La contraseña es obligatoria"),
  });

  const formik = useFormik({
    initialValues: { username: "", email: "", password: "" },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        await AuthService.register(values); // Llamada al servicio de registro
        toast.success("Registro exitoso. Ahora puedes iniciar sesión.");
        resetForm(); // Limpia el formulario después del registro exitoso
      } catch (error) {
        toast.error(
          error.response?.data?.message || "Error al registrarse. Inténtalo de nuevo."
        );
      }
    },
  });

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: 8,
          p: 3,
          border: "1px solid #ccc",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Typography variant="h5" gutterBottom>
          Registrarse
        </Typography>
        <form onSubmit={formik.handleSubmit} style={{ width: "100%" }}>
          <TextField
            label="Nombre de Usuario"
            name="username"
            fullWidth
            margin="normal"
            value={formik.values.username}
            onChange={formik.handleChange}
            error={formik.touched.username && Boolean(formik.errors.username)}
            helperText={formik.touched.username && formik.errors.username}
          />
          <TextField
            label="Correo"
            name="email"
            fullWidth
            margin="normal"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            label="Contraseña"
            name="password"
            type="password"
            fullWidth
            margin="normal"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
          >
            Registrarse
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default Register;