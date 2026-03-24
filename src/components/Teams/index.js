import React, { Fragment, useContext } from 'react';
import { TeamsContext } from '../../contexts/TeamsContext';
import Teams from './Teams';
import Loading from '../Common/Loading';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  page: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(3),
    },
  },
}));

const CountryTeams = () => {
  const classes = useStyles();
  const { teams } = useContext(TeamsContext);

  return (
    <Fragment>
      <div className={classes.page}>
        <Container maxWidth="lg">
          {teams.length === 0 ? <Loading /> : <Teams teams={teams} />}
        </Container>
      </div>
    </Fragment>
  );
};

export default CountryTeams;
