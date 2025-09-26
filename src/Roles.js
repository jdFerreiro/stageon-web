
import React from "react";
import Box from "@mui/material/Box";
import InternalLayout from "./InternalLayout";
import { RolesListScreen } from '@jdFerreiro/identity-microservice';


const Roles = () => {
  return (
    <InternalLayout>
      <Box
        sx={{
          mt: -2,
          textAlign: "center",
          width: '100%',
          maxWidth: '100%',
          height: '100%',
          maxHeight: 'calc(100vh - 120px)',
          overflow: 'auto',
          boxSizing: 'border-box',
        }}
      >
        <RolesListScreen />
      </Box>
    </InternalLayout>
  );
};

export default Roles;
