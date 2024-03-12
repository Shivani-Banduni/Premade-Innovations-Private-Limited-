import React from 'react';
import { Box, Typography, List, ListItem, ListItemText, Divider, Paper } from '@mui/material';
import { useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();
  const user = location.state?.user || JSON.parse(localStorage.getItem('isUserValid')) || JSON.parse(localStorage.getItem('formData'))?.slice(-1)[0] || {};

  return (
    <Box sx={{ width: 400, flexShrink: 0, '& .MuiDrawer-paper': { width: 240, boxSizing: 'border-box' }, p: 2 }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        User Information
      </Typography>
      <Paper elevation={3} sx={{ p: 2 }}>
        <Typography variant="subtitle1" gutterBottom>
          {user.name}
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <List dense>
          <ListItem>
            <ListItemText primary="Email" secondary={user.email} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Details" secondary={user.details} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Age" secondary={user.age} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Mobile No." secondary={user.phoneNo} />
          </ListItem>
          <ListItem>
            <ListItemText primary="College Name" secondary={user.college} />
          </ListItem>
        </List>
      </Paper>
    </Box>
  );
};

export default Sidebar;
