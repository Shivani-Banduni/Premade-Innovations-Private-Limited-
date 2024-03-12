import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Login = () => {

const navigate=useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState('');

  const storedFormData = JSON.parse(localStorage.getItem('formData')) ;


  const handleLogin = (event) => {

    event.preventDefault();
    // Retrieve formData from localStorage
    // const storedFormData = JSON.parse(localStorage.getItem('formData')) || [];

    const isUserValid = storedFormData.find(e => e.email === email && e.password === password);
console.log(isUserValid)

    if (isUserValid) {
      setLoginStatus('Login successful!');
      
      navigate('/dashboard', { state: { user: isUserValid } });
    } else {
      setLoginStatus('Invalid email or password.');
    }
}



  return (
    <Container maxWidth="sm" sx={{border:1,   borderRadius:2, padding:5, marginTop:15}}>
      <Typography variant="h4" component="h1" gutterBottom>
        Login
      </Typography>
      <form onSubmit={handleLogin}>
        <TextField
          label="Email ID"
          variant="outlined"
          type="email"
          fullWidth
          required
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          variant="outlined"
          type="password"
          fullWidth
          required
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /><br/><br/>
        <Button type="submit" variant="contained" color="primary">
          Login
        </Button> <br/><hr/>
       
        {loginStatus && <Typography color="secondary">{loginStatus}</Typography>}
       
      </form>
      <Button onClick={()=>navigate('/signup')} type="submit" variant="contained" color="secondary">
        Signup ?
        </Button>
    </Container>
  );
};

export default Login;
