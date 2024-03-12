import * as React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const PREFIX = 'Home';

const classes = {
    root: `${PREFIX}-root`,
    welcomeAnimation: `${PREFIX}-welcomeAnimation`
  };

const Root = styled('div')(({ theme }) => ({
  [`&.${classes.root}`]: {
    flexGrow: 1,
  },

  [`& .${classes.navbar}`]: {
    backgroundColor: theme.palette.background.paper,
  },

  [`& .${classes.title}`]: {
    flexGrow: 1,
  },

  [`& .${classes.welcomeAnimation}`]: {
    margin: theme.spacing(4, 0),
    padding: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    color: theme.palette.common.white,
    fontWeight: 700,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    animation: '$slideIn 2s ease-in-out, $popIn 2s ease-in-out',
  },

  [`@keyframes slideIn`]: {
    '0%': {
      transform: 'translateX(-100vw)',
      opacity: 0,
    },
    '100%': {
      transform: 'translateX(0)',
      opacity: 1,
    },
  },

  [`@keyframes popIn`]: {
    '0%': {
      transform: 'scale(0)',
    },
    '80%': {
      transform: 'scale(1.1)',
    },
    '100%': {
      transform: 'scale(1)',
    },
  },
}));

export default function Home() {
    return (
      <Root className={classes.root}>
        <Typography variant="h4" className={classes.welcomeAnimation}>
          Welcome to Our Website!
        </Typography>
        <img style={{ boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px' }} src='https://au.res.keymedia.com/files/image/iStock-classroom-girls-students-school.jpg' alt="Classroom" />
      </Root>
    );
  }