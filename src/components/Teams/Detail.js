import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


const Detail = ({idTeam, strAlternate, strTeamJersey, strDescriptionEN, strStadium }) => {
 
    return(
<Grid item xs={12}>
  <Paper >
  <Card className="root">
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          known as : {strAlternate}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
          Stadium : {strStadium}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
          {strDescriptionEN}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  </Paper>
</Grid>
    )
};

export default Detail;