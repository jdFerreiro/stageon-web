import React, { useState, useEffect } from "react";
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { useNavigate } from 'react-router-dom';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from '@mui/icons-material/Dashboard';
import LogoutIcon from '@mui/icons-material/Logout';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import { 
  AccountCircle, 
  Settings, 
  Groups3, 
  AddModeratorRounded, 
  ManageAccounts, 
  AdminPanelSettings  
} from '@mui/icons-material';

const drawerWidth = 220;

const menuItems = [
  { text: 'Dashboard', icon: <DashboardIcon />, path: '/dashboard' },
  { text: 'Configuración', icon: <Settings />,
    children: 
    [
      { text: 'Usuarios', icon: <ManageAccounts />, path: '/internalusers' },
      { text: 'Roles', icon: <AddModeratorRounded />, path: '/internalRoles' },
      { text: 'Clubes', icon: <Groups3 />, path: '/internalClubes' },
      { text: 'Tipo de Usuarios', icon: <AdminPanelSettings />, path: '/internalUserTypes' },
    ]
  },
];

const InternalLayout = ({ children }) => {
  const userName = sessionStorage.getItem('uName');
  const userRole = sessionStorage.getItem('uRole');

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const [openConfig, setOpenConfig] = useState(false);

  // Verifica vigencia del token
  useEffect(() => {
    const token = sessionStorage.getItem('uToken');
    if (!token) {
      navigate('/login');
      return;
    }
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      if (!payload.exp || (payload.exp * 1000) < Date.now()) {
        sessionStorage.clear();
        navigate('/login');
      }
    } catch (e) {
      sessionStorage.clear();
      navigate('/login');
    }
  }, [navigate]);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    sessionStorage.clear();
    navigate('/login');
  };
  const handleProfile = () => {
    navigate('/internalprofile');
    handleClose();
  };

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <AppBar position="fixed" sx={{ zIndex: 1201 }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
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
                Panel de Usuario
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              onClick={handleMenu}
              sx={{ ml: 2 }}
            >
              <AccountCircle />
              <Typography variant="subtitle1" component="span" sx={{ ml: 1 }}>
                {userName ? userName : 'No Identificado'}
              </Typography>
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              transformOrigin={{ vertical: 'top', horizontal: 'left' }}
            >
                <MenuItem onClick={handleProfile}>
                  <ListItemIcon><AccountCircle /></ListItemIcon>
                  Perfil
                </MenuItem>
              <Divider />
                <MenuItem onClick={handleLogout}>
                  <ListItemIcon><LogoutIcon /></ListItemIcon>
                  Salir
                </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {menuItems.map((item, idx) => {
              // Only show 'Configuración' submenu for admin users (case-insensitive, null-safe)
              if (item.text === 'Configuración' && String(userRole).toLowerCase() !== 'administrador') {
                return null;
              }
              if (item.children) {
                return (
                  <React.Fragment key={item.text}>
                    <ListItem button={true} onClick={() => setOpenConfig(!openConfig)}>
                      <ListItemIcon>{item.icon}</ListItemIcon>
                      <ListItemText primary={item.text} />
                      {openConfig ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={openConfig} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding sx={{ pl: 4 }}>
                        {item.children.map((sub, subIdx) => (
                          <ListItem 
                            button={true} 
                            key={sub.text} 
                            onClick={() => navigate(sub.path)}
                          >
                            {sub.icon && <ListItemIcon>{sub.icon}</ListItemIcon>}
                            <ListItemText primary={sub.text} />
                          </ListItem>
                        ))}
                      </List>
                    </Collapse>
                  </React.Fragment>
                );
              } else {
                return (
                  <ListItem 
                    button={true}
                    key={item.text} 
                    onClick={() => navigate(item.path)}
                  >
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.text} />
                  </ListItem>
                );
              }
            })}
          </List>
        </Box>
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: '#f4f6f8',
          p: 3,
          pl: 0,
          ml: 0,
          width: `calc(100vw - ${drawerWidth}px)`,
          maxWidth: `calc(100vw - ${drawerWidth}px)`,
          minHeight: '100vh',
          boxSizing: 'border-box',
        }}
      >
        <Toolbar sx={{ pl: 0, ml: 0 }} />
        {children}
      </Box>
    </Box>
  );
};
export default InternalLayout;
