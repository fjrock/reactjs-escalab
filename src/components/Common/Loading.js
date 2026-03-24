import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import loading from '../../assets/img/loading.gif';

const useStyles = makeStyles((theme) => ({
  wrap: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 240,
    padding: theme.spacing(4),
  },
  img: {
    maxWidth: 'min(280px, 70vw)',
    height: 'auto',
  },
}));

const Loading = () => {
  const classes = useStyles();
  return (
    <div className={classes.wrap}>
      <img className={classes.img} src={loading} alt="Cargando" />
    </div>
  );
};

export default Loading;
