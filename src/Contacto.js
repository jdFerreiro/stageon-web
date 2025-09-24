import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

function Contacto() {
  const [form, setForm] = useState({
    nombre: "",
    empresa: "",
    email: "",
    phone: "",
    mensaje: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    alert("¡Gracias por contactarnos!");
  };

  return (
    <Box sx={{ width: "100%", maxWidth: 500, mx: "auto", mt: 6 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Contacto
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Nombre completo"
            name="nombre"
            value={form.nombre}
            onChange={handleChange}
            fullWidth
            required
            margin="normal"
          />
          <TextField
            label="Empresa"
            name="empresa"
            value={form.empresa}
            onChange={handleChange}
            fullWidth
            required
            margin="normal"
          />
          <TextField
            label="Correo electrónico"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            fullWidth
            required
            margin="normal"
          />
          <TextField
            label="Teléfono"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            fullWidth
            required
            margin="normal"
          />
          <TextField
            label="Mensaje"
            name="mensaje"
            value={form.mensaje}
            onChange={handleChange}
            fullWidth
            required
            multiline
            rows={4}
            margin="normal"
          />
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
            Enviar
          </Button>
        </form>
      </Paper>
    </Box>
  );
}

export default Contacto;
