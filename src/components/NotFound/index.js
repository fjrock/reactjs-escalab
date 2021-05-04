import React from 'react';
import ButtonBackHome from '../Common/ButtonBackHome';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const NotFound = () => {

  return(
    <Card className="rootnotfound">
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            PAGE NOT FOUND
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <ButtonBackHome/> 
      </CardActions>
    </Card>
    
)};

NotFound.displayName = 'NotFound';
export default NotFound;