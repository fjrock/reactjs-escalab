import React from "react";
import { Link } from 'react-router-dom';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from '@material-ui/core/Button';

const Teams = ({ idTeams,strTeam,strTeamBadge }) => (
<Grid item xs={12} sm={6}>
  <Paper >
  <h3>{strTeam}</h3>
    <ul>
        <li>
            <img alt={strTeamBadge} src={strTeamBadge} />
            <strong>Name:</strong>
            <span>{strTeam}</span>
            <span>{strTeam}</span>
        </li>
    </ul>
    
  </Paper>

</Grid>

);

export default Teams;