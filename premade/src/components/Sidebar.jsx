import React from 'react';
import { Box, Typography, List, ListItem, ListItemText, Divider, Paper } from '@mui/material';

const drawerWidth = 240;

// Mock data
const userData = JSON.parse(localStorage.getItem('formData'));
const singleUser = userData ? userData[userData.length - 1] : {};

const Sidebar = () => (
  <Box sx={{ flexShrink: 0, '& .MuiDrawer-paper': { width: drawerWidth, boxSizing: 'border-box' }, p: 2 }}>
    <Typography variant="h6" sx={{ my: 2 }}>
      User Information
    </Typography>
    <Paper elevation={3} sx={{ p: 2 }}>
      <Typography variant="subtitle1" gutterBottom>
        {singleUser.name}
      </Typography>
      <Divider sx={{ mb: 2 }} />
      <List dense>
        <ListItem>
          <ListItemText primary="Email" secondary={singleUser.email} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Details" secondary={singleUser.details} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Age" secondary={singleUser.age} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Mobile No." secondary={singleUser.phoneNo} />
        </ListItem>
        <ListItem>
          <ListItemText primary="College Name" secondary={singleUser.college} />
        </ListItem>
      </List>
    </Paper>
  </Box>
);

export default Sidebar;
