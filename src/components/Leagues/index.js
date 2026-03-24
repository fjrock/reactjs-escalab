import React, { Fragment, useContext } from 'react';
import { LeaguesContext } from '../../contexts/LeaguesContext';
import SearchLeagues from './SearchLeagues';
import Leagues from './Leagues';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  page: {
    minHeight: 'calc(100vh - 128px)',
    paddingBottom: theme.spacing(4),
    paddingTop: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(3),
    },
  },
  emptyWrap: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 280,
    marginTop: theme.spacing(2),
  },
  emptyPaper: {
    padding: theme.spacing(4, 3),
    textAlign: 'center',
    maxWidth: 420,
    width: '100%',
    background: 'linear-gradient(160deg, #ffffff 0%, #f5f8fc 100%)',
    border: `1px solid ${theme.palette.divider}`,
  },
  emptyIcon: {
    fontSize: 48,
    marginBottom: theme.spacing(1),
    lineHeight: 1,
  },
}));

const CountryLeagues = () => {
  const classes = useStyles();
  const { leagues } = useContext(LeaguesContext);

  return (
    <Fragment>
      <div className={classes.page}>
        <Container maxWidth="md">
          <SearchLeagues />
        </Container>
        {leagues.length === 0 ? (
          <Container maxWidth="md" className={classes.emptyWrap}>
            <Paper className={classes.emptyPaper} elevation={0}>
              <div className={classes.emptyIcon} aria-hidden>
                🌍
              </div>
              <Typography variant="h6" component="p" gutterBottom>
                Elige un país
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Las ligas disponibles aparecerán aquí. Usa el buscador de arriba
                para filtrar entre cientos de países.
              </Typography>
            </Paper>
          </Container>
        ) : (
          <Container maxWidth="lg">
            <Leagues leagues={leagues} />
          </Container>
        )}
      </div>
    </Fragment>
  );
};

export default CountryLeagues;
