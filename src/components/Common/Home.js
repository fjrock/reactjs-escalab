import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Button,
  Container,
  Typography,
  Grid,
} from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import HeroSportsIllustration from './HeroSportsIllustration';

const useStyles = makeStyles((theme) => ({
  page: {
    overflowX: 'hidden',
    minHeight: 'calc(100vh - 100px)',
    paddingBottom: theme.spacing(6),
  },
  /** Banda full-bleed con curva inferior (rompe la “caja cuadrada”) */
  heroShell: {
    position: 'relative',
    width: '100vw',
    left: '50%',
    marginLeft: '-50vw',
    marginRight: '-50vw',
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(7),
    borderBottomLeftRadius: 52,
    borderBottomRightRadius: 52,
    [theme.breakpoints.up('sm')]: {
      borderBottomLeftRadius: 88,
      borderBottomRightRadius: 88,
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(8),
    },
    boxShadow: '0 40px 80px -20px rgba(13, 71, 161, 0.35)',
  },
  heroMesh: {
    position: 'absolute',
    inset: 0,
    borderBottomLeftRadius: 'inherit',
    borderBottomRightRadius: 'inherit',
    overflow: 'hidden',
    background: `linear-gradient(
      152deg,
      ${theme.palette.primary.dark} 0%,
      ${theme.palette.primary.main} 42%,
      ${theme.palette.secondary.main} 100%
    )`,
    '&::before': {
      content: '""',
      position: 'absolute',
      top: '-25%',
      right: '-15%',
      width: '75%',
      height: '95%',
      background: 'radial-gradient(circle, rgba(255,255,255,0.28) 0%, transparent 58%)',
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: '-35%',
      left: '-25%',
      width: '90%',
      height: '85%',
      background: 'radial-gradient(circle, rgba(255,255,255,0.12) 0%, transparent 55%)',
    },
  },
  heroInner: {
    position: 'relative',
    zIndex: 1,
  },
  kicker: {
    display: 'inline-block',
    fontSize: '0.75rem',
    fontWeight: 700,
    letterSpacing: '0.14em',
    textTransform: 'uppercase',
    color: 'rgba(255,255,255,0.72)',
    marginBottom: theme.spacing(1),
  },
  heroTitle: {
    fontWeight: 800,
    letterSpacing: '-0.03em',
    lineHeight: 1.15,
    color: '#fff',
    fontSize: '2rem',
    marginBottom: theme.spacing(1.5),
    textShadow: '0 4px 24px rgba(0,0,0,0.15)',
    [theme.breakpoints.up('sm')]: {
      fontSize: '2.5rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '2.85rem',
    },
  },
  heroSubtitle: {
    color: 'rgba(255,255,255,0.88)',
    lineHeight: 1.6,
    fontSize: '1.05rem',
    maxWidth: 400,
    marginBottom: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      marginBottom: theme.spacing(3.5),
    },
  },
  cta: {
    borderRadius: 999,
    padding: theme.spacing(1.5, 3.5),
    fontSize: '1rem',
    fontWeight: 700,
    textTransform: 'none',
    background: '#fff',
    color: theme.palette.primary.dark,
    boxShadow: '0 12px 32px rgba(0,0,0,0.2)',
    '&:hover': {
      background: '#f5f9ff',
      boxShadow: '0 16px 40px rgba(0,0,0,0.22)',
    },
  },
  visualCol: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      marginTop: 0,
      justifyContent: 'flex-end',
    },
  },
  visualFrame: {
    width: '100%',
    maxWidth: 440,
    position: 'relative',
    animation: '$heroDrift 6s ease-in-out infinite',
    filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.2))',
    [theme.breakpoints.up('md')]: {
      maxWidth: 480,
      transform: 'scale(1.06) translateX(8px)',
    },
  },
  heroSvg: {
    display: 'block',
    width: '100%',
    height: 'auto',
  },
  '@keyframes heroDrift': {
    '0%, 100%': { transform: 'translateY(0) translateX(0) scale(1)' },
    '50%': { transform: 'translateY(-12px) translateX(4px) scale(1.03)' },
  },
  /** Franja inferior suave (continuidad con el fondo de la app) */
  fadeStrip: {
    height: theme.spacing(3),
    marginTop: -theme.spacing(1),
    background: `linear-gradient(180deg, ${theme.palette.primary.main}11 0%, transparent 100%)`,
  },
}));

const Home = () => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={classes.page}>
      <section className={classes.heroShell} aria-labelledby="home-hero-title">
        <div className={classes.heroMesh} aria-hidden />
        <Container maxWidth="md" className={classes.heroInner}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <span className={classes.kicker}>Sports App</span>
              <Typography
                id="home-hero-title"
                variant="h3"
                component="h1"
                className={classes.heroTitle}
              >
                Ligas y equipos del mundo
              </Typography>
              <Typography variant="body1" className={classes.heroSubtitle} component="p">
                Busca por país, explora competiciones y entra al detalle de cada club. Todo en una
                experiencia pensada para móvil y escritorio.
              </Typography>
              <Button
                component={RouterLink}
                to="/leaguescontext/countries"
                variant="contained"
                size="large"
                className={classes.cta}
              >
                Explorar ligas
              </Button>
            </Grid>
            <Grid item xs={12} md={6} className={classes.visualCol}>
              <div className={classes.visualFrame}>
                <HeroSportsIllustration
                  className={classes.heroSvg}
                  primary={theme.palette.primary.main}
                  primaryDark={theme.palette.primary.dark}
                  accent={theme.palette.secondary.main}
                />
              </div>
            </Grid>
          </Grid>
        </Container>
      </section>
      <div className={classes.fadeStrip} aria-hidden />
    </div>
  );
};

export default Home;
