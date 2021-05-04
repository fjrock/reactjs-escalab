import React from 'react';
import ButtonBack from '../Common/ButtonBack';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    width: '100vw',
  },
  media: {
    height: '100vh'
  },
});


const NotFound = () => {
  const classes = useStyles();

  return(
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            PAGE NOT FOUND
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <ButtonBack/> 
      </CardActions>
    </Card>
    
)};

NotFound.displayName = 'NotFound';
export default NotFound;