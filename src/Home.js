import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

const Home = () => (
  <Box sx={{ textAlign: 'center', mt: 6 }}>
    <Typography variant="h3" component="h1" gutterBottom>
      Bienvenido a StageOn
    </Typography>
    <Divider sx={{ my: 3 }} />
    <Typography variant="h6" component="h2" gutterBottom>
      Tu plataforma para la gestión de cines y teatros
    </Typography>
    <Typography variant="body1" sx={{ maxWidth: 500, mx: 'auto', mt: 2 }}>
      Accede como usuario para consultar la cartelera actualizada y gestionar tus reservas de manera fácil y rápida. Descubre funciones, obras y espectáculos, y reserva tus entradas desde cualquier lugar.
    </Typography>
  </Box>
);

export default Home;