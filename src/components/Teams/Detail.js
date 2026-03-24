import React from 'react';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: 0,
    overflow: 'hidden',
  },
  content: {
    padding: theme.spacing(2.5, 2),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(3),
    },
  },
  title: {
    fontWeight: 800,
    marginBottom: theme.spacing(2),
  },
  meta: {
    color: theme.palette.text.secondary,
    marginBottom: theme.spacing(0.5),
    fontSize: '0.95rem',
  },
  body: {
    marginTop: theme.spacing(2),
    lineHeight: 1.65,
    whiteSpace: 'pre-wrap',
  },
}));

const Detail = ({
  strTeam,
  strAlternate,
  strTeamJersey,
  strDescriptionEN,
  strStadium,
}) => {
  const classes = useStyles();

  return (
    <Paper className={classes.paper} elevation={0}>
      <Card variant="outlined">
        <CardContent className={classes.content}>
          <Typography variant="h5" component="h1" className={classes.title}>
            {strTeam}
          </Typography>
          {strAlternate && (
            <Typography variant="body2" className={classes.meta}>
              También conocido como: {strAlternate}
            </Typography>
          )}
          {strStadium && (
            <Typography variant="body2" className={classes.meta}>
              Estadio: {strStadium}
            </Typography>
          )}
          {strTeamJersey && (
            <Typography variant="body2" className={classes.meta}>
              Equipación: {strTeamJersey}
            </Typography>
          )}
          {strDescriptionEN && (
            <>
              <Divider style={{ margin: '16px 0' }} />
              <Typography variant="body1" component="div" className={classes.body} color="textPrimary">
                {strDescriptionEN}
              </Typography>
            </>
          )}
        </CardContent>
      </Card>
    </Paper>
  );
};

export default Detail;
