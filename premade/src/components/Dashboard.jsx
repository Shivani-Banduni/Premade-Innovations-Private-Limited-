import React, { useState, useRef } from 'react';
import {
  AppBar,
  Box,
  Button,
  CssBaseline,
  IconButton,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Sidebar from './Sidebar';
import { useLocation } from 'react-router-dom';

export default function Dashboard() {

    const alldata = JSON.parse(localStorage.getItem('formData')) ;

    const location = useLocation();
    const user = location.state?.user || JSON.parse(localStorage.getItem('isUserValid')) || JSON.parse(localStorage.getItem('formData'))?.slice(-1)[0] || {};
user.picture=  user.selfie;
user.location=user.location;
console.log(user)
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [temporaryUser, setTemporaryUser] = useState({ selfie: '', location: {} });
  const [users, setUsers] = useState([]);
  const videoRef = useRef(null);
  const [showVideo, setShowVideo] = useState(false);
  const [num,setnum]=useState(0)

  const captureSelfie = async () => {
    setShowVideo(true);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
    } catch (error) {
      console.error('Error accessing the camera:', error);
    }
  };

  const clickSelfie = async () => {
    const video = videoRef.current;
    const stream = video.srcObject;
    const tracks = stream.getVideoTracks();
    const track = tracks[0];
    const imageCapture = new ImageCapture(track);
    const blob = await imageCapture.takePhoto();
    const imageUrl = URL.createObjectURL(blob);
    setTemporaryUser((prevUser) => ({ ...prevUser, selfie: imageUrl }));
    track.stop();
    setShowVideo(false);
  };

  const captureLocation = () => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        setTemporaryUser((prevUser) => ({
          ...prevUser,
          location: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          },
        }));
      }, (error) => {
        console.error('Error obtaining location:', error);
      });
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  };

  const saveUser = () => {
    if (temporaryUser.selfie && temporaryUser.location.latitude && temporaryUser.location.longitude) {
      const allUsers = JSON.parse(localStorage.getItem('formData')) || [];
      const currentUser = allUsers.find(u => u.email === user.email); // Assuming 'user.email' is the identifier
  
      if (currentUser) {
        currentUser.selfie = temporaryUser.selfie;
        currentUser.location = temporaryUser.location;
      } else {
        console.error('User not found in formData');
      }
  
      localStorage.setItem('formData', JSON.stringify(allUsers));
  
      setTemporaryUser({ selfie: '', location: {} });
      setShowVideo(false);
      setnum(1); 
    } else {
      alert('Please take a selfie and capture your location.');
    }
  };
  


  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={() => {}} sx={{ mr: 2, display: isMobile ? 'block' : 'none' }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Attendance App
          </Typography>
        </Toolbar>
      </AppBar>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Typography variant="h4" gutterBottom>Welcome!</Typography>
        {showVideo && (
          <div>
            <video ref={videoRef} autoPlay style={{ width: '100%' }}></video>
            <Button variant="contained" onClick={clickSelfie} sx={{ marginY: 2 }}>Click</Button>
          </div>
        )}
        {!showVideo && (
          <>
            <Button variant="contained" startIcon={<CameraAltIcon />} sx={{ marginRight: 2 }} onClick={captureSelfie}>Take Selfie</Button>
            <Button variant="contained" color="secondary" startIcon={<LocationOnIcon />} sx={{ marginRight: 2 }} onClick={captureLocation}>Capture Location</Button>
            <Button  disabled={num==1} variant="contained" onClick={saveUser}>Save Attendance</Button>
          </>
        )}
        <List>
          {users.map((user, index) => (
            <ListItem key={index}>
              <ListItemAvatar>
                <Avatar src={user.selfie} />
              </ListItemAvatar>
              <ListItemText  secondary={`Lat: ${user.location.latitude}, Lon: ${user.location.longitude}`} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
}
