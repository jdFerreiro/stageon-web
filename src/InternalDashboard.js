
import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import DashboardLayout from "./InternalLayout";


const Dashboard = () => {
  return (
    <DashboardLayout>
      <Box sx={{ mt: 4, textAlign: "center" }}>
        <Typography variant="h3" gutterBottom>
          Bienvenido al Dashboard
        </Typography>
        <Typography variant="body1">
          Aquí podrás ver información relevante y acceder a las funcionalidades principales de StageOn.
        </Typography>
      </Box>
    </DashboardLayout>
  );
};

export default Dashboard;
