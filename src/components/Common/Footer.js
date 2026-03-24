import React from 'react';
import { Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 'auto',
    padding: theme.spacing(2.5, 2),
    borderTop: `1px solid ${theme.palette.divider}`,
    backgroundColor: theme.palette.background.paper,
  },
  text: {
    textAlign: 'center',
    color: theme.palette.text.secondary,
    fontSize: '0.8125rem',
  },
}));

const Footer = () => {
  const classes = useStyles();
  const year = new Date().getFullYear();
  return (
    <footer className={classes.root}>
      <Container maxWidth="lg">
        <Typography variant="body2" className={classes.text}>
          © {year} Sports App · Datos de TheSportsDB
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
