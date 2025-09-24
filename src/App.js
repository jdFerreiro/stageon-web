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


function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Layout>
  );
}

export default App;
