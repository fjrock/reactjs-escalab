import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  overlay: {
    position: 'fixed',
    inset: 0,
    zIndex: 1400,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: theme.spacing(2),
    background:
      'linear-gradient(180deg, rgba(12, 23, 56, 0.58) 0%, rgba(10, 30, 84, 0.52) 60%, rgba(8, 40, 114, 0.45) 100%)',
    backdropFilter: 'blur(6px)',
    WebkitBackdropFilter: 'blur(6px)',
    animation: '$fadeIn 220ms ease-out',
  },
  spinnerWrap: {
    width: 88,
    height: 88,
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'rgba(255,255,255,0.14)',
    boxShadow: '0 18px 38px rgba(0,0,0,0.32)',
  },
  spinner: {
    color: '#fff',
  },
  label: {
    color: '#fff',
    fontWeight: 600,
    letterSpacing: '0.02em',
    textShadow: '0 2px 14px rgba(0,0,0,0.35)',
  },
  '@keyframes fadeIn': {
    from: { opacity: 0 },
    to: { opacity: 1 },
  },
}));

const Loading = () => {
  const classes = useStyles();
  return (
    <div className={classes.overlay} role="status" aria-live="polite" aria-label="Cargando">
      <div className={classes.spinnerWrap}>
        <CircularProgress thickness={4.5} size={46} className={classes.spinner} />
      </div>
      <Typography variant="subtitle1" className={classes.label}>
        Cargando...
      </Typography>
    </div>
  );
};

export default Loading;
