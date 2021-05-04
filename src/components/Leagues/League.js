import React from "react";
import { Link } from 'react-router-dom';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const League = ({ idLeague, strLeague, strSport, strLogo, strBadge }) => {

  return(
<Grid item xs={12} sm={6}>
  <Paper >
    <h3>League : {strLeague}{strSport}</h3>
    <h3>Type: {strSport}</h3>
    <Link to={`/teamscontext/teams/${idLeague}`}>
      <img alt={strBadge} src={strBadge} />
    </Link>
  </Paper>

</Grid>

)};

export default League;