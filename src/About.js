import React from "react";
// ...existing code...
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import CardActionArea from "@mui/material/CardActionArea";

const microservices = [
  {
    name: "Identificación",
    description: "Gestión de usuarios y roles. Permite la autenticación y autorización en la plataforma.",
  },
  {
    name: "Localidades",
    description: "Administración de salas y localidades. Facilita la gestión de espacios físicos para eventos.",
  },
  {
    name: "Eventos",
    description: "Manejo de eventos y funciones. Permite la creación y organización de espectáculos.",
  },
  {
    name: "Tarifas y Precios",
    description: "Definición y gestión de tarifas. Controla los precios de entradas y servicios asociados.",
  },
  {
    name: "Reservas y Butacas",
    description: "Reserva de tickets y asientos. Administra la compra y asignación de entradas.",
  },
  {
    name: "Administración de Pagos",
    description: "Procesamiento de pagos. Permite realizar transacciones seguras para la compra de entradas.",
  },
  {
    name: "Notificaciones",
    description: "Gestión de comunicaciones. Envía notificaciones a los usuarios sobre eventos y reservas.",
  },
  {
    name: "Reportes y Análisis",
    description: "Estadísticas y auditoría. Proporciona informes sobre ventas, asistencia y otros datos relevantes.",
  },
];

function About() {
  return (
    <Box sx={{ width: '100%', py: 4 }}>
      <Typography variant="h3" align="center" gutterBottom>
        Sobre StageOn
      </Typography>
      <Typography variant="body1" align="center" color="text.secondary" sx={{ mb: 4 }}>
        StageOn está construido sobre una arquitectura de microservicios que permite escalabilidad, flexibilidad y alta disponibilidad. Cada microservicio cumple una función específica dentro del ecosistema de la plataforma.
      </Typography>
      <Box
        sx={{
          width: '100%',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 3,
          justifyItems: 'center',
        }}
      >
        {microservices.map((service, idx) => (
          <Card key={idx} elevation={3} sx={{ width: '100%', maxWidth: 400 }}>
            <CardActionArea>
              <CardContent>
                <Typography variant="h6" component="div" align="center" color="primary" sx={{ wordBreak: "break-word", mb: 1 }}>
                  {service.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" align="center" sx={{ wordBreak: "break-word" }}>
                  {service.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Box>
  );
}

export default About;
