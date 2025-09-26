// El logo se usará desde la carpeta public
import './App.css';
import Layout from './Layout';
import { Routes, Route } from 'react-router-dom';

import Home from './Home';
import About from './About';
import Contacto from './Contacto';
import Login from './Login';
import Dashboard from './InternalDashboard';
import Profile from './Profile';
import Users from './Users';
import Roles from './Roles';
import Clubes from './Clubes';
import UserTypes from './UserTypes';


function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/internalprofile" element={<Profile />} />
        <Route path="/internalusers" element={<Users />} />
        <Route path="/internalRoles" element={<Roles />} />
        <Route path="/internalClubes" element={<Clubes />} />
        <Route path="/internalUserTypes" element={<UserTypes />} />
      </Routes>
    </Layout>
  );
}

export default App;
