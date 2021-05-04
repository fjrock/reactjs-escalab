import React from 'react';
import ButtonBack from '../Common/ButtonBack';
import Container from '@material-ui/core/Container';
import error from '../../assets/img/error.png';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    width: '100vw',
    backgroundPosition: 'center'
  },
  media: {
    height: '60vh'
  },
});

const styles = {
  paperContainer: {
      
      backgroundImage: `url(${error})`,
      backgroundPosition: 'center',
      backgroundSize: 'auto',
      backgroundRepeat: 'no-repeat',
      width: '100vw',
      height: '100vh'
  }
};

const NotFound = () => {
  const classes = useStyles();

  return(
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={error}
        />

      </CardActionArea>
      <CardActions>
      <ButtonBack/> 
      </CardActions>
    </Card>
    
)};

NotFound.displayName = 'NotFound';
export default NotFound;