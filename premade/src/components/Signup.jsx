import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
function Signup() {
    const navigate=useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    details: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNo: '',
    age: '',
    college: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);

    const existingFormData = JSON.parse(localStorage.getItem('formData')) || [];

  // Push new form data into the array
  existingFormData.push({...formData});

  // Save the updated array back to local storage using the correct key name
  localStorage.setItem('formData', JSON.stringify(existingFormData));
    // Add form submission logic here
    navigate('/dashboard')
    window.location.reload()  };

  return (
    <Container maxWidth="sm" sx={{ border:1}}>
      <Typography variant="h4" component="h1" gutterBottom>
        Sign Up
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Details"
              name="details"
              value={formData.details}
              onChange={handleChange}
              multiline
              rows={4}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Email ID"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Confirm Password"
              name="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Phone No"
              name="phoneNo"
              value={formData.phoneNo}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Age"
              name="age"
              type="number"
              value={formData.age}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
            required
              fullWidth
              label="College"
              name="college"
              value={formData.college}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Sign Up
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}

export default Signup;
