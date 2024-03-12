// SignUp.js
import React, { useState } from 'react';
import { Container, TextField, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
const Adminlogin = () => {
const navigate=useNavigate()
  const [user, setUser] = useState({
    name: 'shivani',
    email: 'shivanibanduni009@gmail.com',
    password: '123',
  });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setUser({ ...user, [name]: value });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
   navigate('/admindashboard')
    // Redirect or clear form here
  };

  return (
    <Container component="main" maxWidth="xs">
      <Typography component="h1" variant="h5">
        Sign Up
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          label="Name"
          name="name"
          autoComplete="name"
          autoFocus
          
           value={user.name}
          // onChange={handleChange}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          label="Email Address"
          name="email"
          autoComplete="email"
           value={user.email}
          // onChange={handleChange}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          autoComplete="current-password"
           value={user.password}
          // onChange={handleChange}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
        >
          Sign Up
        </Button>
      </form>
    </Container>
  );
};

export default  Adminlogin;
