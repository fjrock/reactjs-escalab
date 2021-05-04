import React from 'react';
import ButtonBack from '../Common/ButtonBack';
import error from '../../assets/img/error.png';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';


const useStyles = makeStyles({
  root: {
    width: '100vw',
    backgroundPosition: 'center'
  },
  media: {
    height: '60vh'
  },
});


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