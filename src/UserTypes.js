
import React from "react";
import Box from "@mui/material/Box";
import InternalLayout from "./InternalLayout";
import { UserTypesListScreen } from '@jdFerreiro/identity-microservice';


const UserTypes = () => {
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
        <UserTypesListScreen />
      </Box>
    </InternalLayout>
  );
};

export default UserTypes;
