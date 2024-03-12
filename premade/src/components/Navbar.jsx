// Navbar.jsx
import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
  
    return (
        <AppBar sx={{ bgcolor: '#1976d2' }} position="static" color="default">
            <Toolbar sx={{ bgcolor: '#1976d2' }}>
                <Typography onClick={()=>navigate('/')} variant="h6" sx={{ color:'white', flexGrow: 1 , marginRight:120}}>
                Home
                </Typography>
                <Button sx={{ color: 'white', fontWeight: 'bold' }} onClick={() => navigate('/login')} color="inherit">Login</Button>
                <Button sx={{ color: 'white', fontWeight: 'bold' }} onClick={() => navigate('/adminlogin')} color="inherit">Login as admin</Button>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
