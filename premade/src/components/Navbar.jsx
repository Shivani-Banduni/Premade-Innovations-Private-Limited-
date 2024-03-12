// Navbar.jsx
import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
  
    return (
        <AppBar sx={{ bgcolor: '#1976d2' }} position="static" color="default">
            <Toolbar sx={{ bgcolor: '#1976d2' }}>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    {/* Add logo or title here */}
                </Typography>
                <Button sx={{ color: 'white', fontWeight: 'bold' }} onClick={() => navigate('/login')} color="inherit">Login</Button>
                <Button sx={{ color: 'white', fontWeight: 'bold' }} onClick={() => navigate('/adminlogin')} color="inherit">Login as admin</Button>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
