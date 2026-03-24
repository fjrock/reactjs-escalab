import React, { Fragment, useContext } from 'react';
import { TeamContext } from '../../contexts/TeamContext';
import Detail from './Detail';
import Loading from '../Common/Loading';
import NoData from '../NoData';
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

const TeamsDetail = () => {
  const classes = useStyles();
  const { team } = useContext(TeamContext);

  return (
    <Fragment>
      <div className={classes.page}>
        <Container maxWidth="md">
          {team === null ? (
            <Loading />
          ) : team.length === 0 ? (
            <NoData />
          ) : (
            team.map((t) => (
              <Detail
                key={t.idTeam}
                idTeam={t.idTeam}
                strTeam={t.strTeam}
                strAlternate={t.strTeamAlternate || t.strAlternate}
                strTeamJersey={t.strTeamJersey}
                strDescriptionEN={t.strDescriptionEN}
                strStadium={t.strStadium}
              />
            ))
          )}
        </Container>
      </div>
    </Fragment>
  );
};

export default TeamsDetail;
