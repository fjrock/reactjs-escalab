import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  card: {
    height: '100%',
  },
  media: {
    height: 0,
    paddingTop: '70%',
    backgroundSize: 'contain',
    backgroundColor: '#f5f8fc',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  mediaEmpty: {
    height: 0,
    paddingTop: '70%',
    backgroundColor: theme.palette.action.hover,
  },
  title: {
    fontWeight: 700,
    fontSize: '1rem',
    textAlign: 'center',
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
    display: 'block',
    height: '100%',
  },
}));

const Team = ({ team }) => {
  const classes = useStyles();
  const { idTeam, strTeam, strTeamBadge, strBadge, strLogo } = team;
  const img = strTeamBadge || strBadge || strLogo;

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.card}>
        <Link
          className={classes.link}
          to={{
            pathname: `/teamcontext/team/${idTeam}`,
            state: { team },
          }}
        >
          <CardActionArea>
            {img ? (
              <CardMedia className={classes.media} image={img} title={strTeam || ''} />
            ) : (
              <div className={classes.mediaEmpty} />
            )}
            <CardContent>
              <Typography variant="subtitle1" component="h3" className={classes.title} noWrap>
                {strTeam}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Link>
      </Card>
    </Grid>
  );
};

export default Team;
