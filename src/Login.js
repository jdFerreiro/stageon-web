import React from "react";
import { useNavigate } from 'react-router-dom';
import { LoginScreen } from '@jdFerreiro/identity-microservice';
import Typography from '@mui/material/Typography';

const apiUrl = process.env.REACT_APP_API_URL || process.env.VITE_API_URL || 'https://localhost:7010';

function decodeJwtPayload(token) {
  try {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map(function (c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join('')
    );
    return JSON.parse(jsonPayload);
  } catch (e) {
    return null;
  }
}

const Login = () => {
  const navigate = useNavigate();
  const handleLogin = (userData) => {
    // Acceder al token
    const token = userData.access_token;
    console.log('Token:', token);
    const payload = decodeJwtPayload(token);
    console.log('Payload decodificado:', payload);  

    // Puedes guardarlo en sessionStorage si lo necesitas
    sessionStorage.setItem('token', token);
    sessionStorage.setItem('userId', payload.sub);
    sessionStorage.setItem('userName', payload.firstName + ' ' + payload.lastName);
    sessionStorage.setItem('userRole', payload.roleName);
    sessionStorage.setItem('userRoleId', payload.roleId);
    sessionStorage.setItem('email', payload.email);

    // Redirigir al dashboard
    navigate('/dashboard');
  };
  return (
    <>
      <Typography variant="h5" sx={{ mt: 1 }}>
        Ingresar al sistema
      </Typography>
      <LoginScreen apiUrl={apiUrl} onLoginSuccess={handleLogin} />
    </>
  );
};
export default Login;