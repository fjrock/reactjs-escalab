import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
    backgroundSize: 'contain',
    backgroundColor: '#f5f8fc',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  content: {
    flexGrow: 1,
    paddingBottom: theme.spacing(2),
  },
  title: {
    fontWeight: 700,
    fontSize: '1.05rem',
    lineHeight: 1.35,
    marginBottom: theme.spacing(1),
  },
  chip: {
    fontWeight: 600,
    fontSize: '0.75rem',
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
    display: 'block',
    height: '100%',
  },
}));

const League = ({ idLeague, strLeague, strSport, strCountry, strLogo, strBadge }) => {
  const classes = useStyles();
  const img = strBadge || strLogo;

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.card}>
        <Link
          className={classes.link}
          to={{
            pathname: `/equipos/${idLeague}`,
            state: { idLeague, strLeague, strSport, strCountry },
          }}
        >
            <CardActionArea>
            {img ? (
              <CardMedia
                className={classes.media}
                image={img}
                title={strLeague || ''}
              />
            ) : (
              <div className={classes.media} role="img" aria-label="" />
            )}
            <CardContent className={classes.content}>
              <Typography
                variant="h6"
                component="h3"
                className={classes.title}
                color="textPrimary"
              >
                {strLeague}
              </Typography>
              {strSport && (
                <Chip
                  size="small"
                  label={strSport}
                  color="primary"
                  className={classes.chip}
                />
              )}
            </CardContent>
          </CardActionArea>
        </Link>
      </Card>
    </Grid>
  );
};

export default League;
