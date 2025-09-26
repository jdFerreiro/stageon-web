import React from "react";
import InternalLayout from "./InternalLayout";
import { PerfilScreen } from 'identity-microservice/dist/identity-microservice.es.js';

const Profile = () => {
  return (
    <InternalLayout>
      <PerfilScreen />
    </InternalLayout>
  );
};

export default Profile;
