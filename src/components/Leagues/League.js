import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const League = ({ idLeague, strLeague, strSport, strLogo, strBadge }) => (
<Grid item xs={12} sm={6}>
  <Paper >
  <h3>{strLeague}</h3>
    <ul>
        <li>
            <img alt="strBadge" src={strBadge} />
            <strong>Name:</strong>
            <span>{strLeague}</span>
            <span>{idLeague}</span>
            
        </li>
    </ul>
  </Paper>

</Grid>

);

export default League;