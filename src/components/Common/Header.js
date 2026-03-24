import React from 'react';
import { Link as RouterLink, useHistory } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  IconButton,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ArrowBack from '@material-ui/icons/ArrowBack';
import ArrowForward from '@material-ui/icons/ArrowForward';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    minHeight: 56,
    gap: theme.spacing(0.5),
    [theme.breakpoints.up('sm')]: {
      minHeight: 64,
    },
  },
  navBtn: {
    marginRight: theme.spacing(0.25),
  },
  title: {
    fontWeight: 700,
    letterSpacing: '-0.03em',
    fontSize: '1.15rem',
    marginLeft: theme.spacing(1),
    flexGrow: 1,
    textDecoration: 'none',
    color: 'inherit',
    '&:hover': {
      opacity: 0.92,
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '1.35rem',
    },
  },
}));

const Header = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <AppBar position="sticky" elevation={0}>
      <Container maxWidth="lg">
        <Toolbar disableGutters className={classes.toolbar}>
          <IconButton
            edge="start"
            className={classes.navBtn}
            color="inherit"
            onClick={() => history.goBack()}
            aria-label="Página anterior"
          >
            <ArrowBack />
          </IconButton>
          <IconButton
            className={classes.navBtn}
            color="inherit"
            onClick={() => history.goForward()}
            aria-label="Página siguiente"
          >
            <ArrowForward />
          </IconButton>
          <Typography
            variant="h6"
            component={RouterLink}
            to="/"
            className={classes.title}
          >
            Sports App
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
