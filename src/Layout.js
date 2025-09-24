import React from "react";
import { Link, useLocation } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import "./Layout.css";


const Layout = ({ children }) => {
  const location = useLocation();
  // Rutas donde NO se debe mostrar el footer
  const hideFooterRoutes = [
    '/dashboard',
    '/admin',
    '/internal',
  ];
  const hideFooter = hideFooterRoutes.some(route => location.pathname.startsWith(route));

  return (
    <Box
      className="Layout"
      sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <AppBar position="static" color="primary">
        <Toolbar
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img
              src="/logo.svg"
              alt="StageOn Logo"
              style={{ height: 48, marginRight: 16 }}
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <Typography variant="h4" component="div" sx={{ fontWeight: "bold" }}>
                StageOn
              </Typography>
              <Typography variant="subtitle2" component="div" sx={{ mt: 0.5 }}>
                Gestión de Cines y Teatros
              </Typography>
            </Box>
          </Box>
          <Stack direction="row" spacing={2} sx={{ ml: 2 }}>
            <Button color="inherit" component={Link} to="/">Inicio</Button>
            <Button color="inherit" component={Link} to="/about">Sobre StageOn</Button>
            <Button color="inherit" component={Link} to="/contacto">Contacto</Button>
            <Button color="inherit" component={Link} to="/login">Ingresar</Button>
          </Stack>
        </Toolbar>
      </AppBar>

      <Box sx={{ flex: 1, minHeight: 0, p: 0, m: 0, overflow: 'hidden', backgroundColor: '#fafafa' }}>
        <Box sx={{ height: '100%', minHeight: 'calc(100vh - 112px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Container maxWidth="sm" disableGutters sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', p: 0 }}>
            {children}
          </Container>
        </Box>
      </Box>
      {!hideFooter && (
        <Box
          component="footer"
          sx={{
            bgcolor: "primary.main",
            color: "primary.contrastText",
            textAlign: "center",
            py: 2,
          }}
        >
          <Typography variant="body2">
            &copy; 2025 StageOn - BequemSoftware. Todos los derechos reservados.
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default Layout;
