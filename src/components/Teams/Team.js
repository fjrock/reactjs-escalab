import React from "react";
import { Link } from 'react-router-dom';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";


const Teams = ({ idTeam,strTeam,strTeamBadge }) => (
<Grid item xs={12} sm={6}>
  <Paper >
  <h3>{strTeam}</h3>
    <ul>
        <Link to={`/teamcontext/team/${idTeam}`}>
            <img alt={strTeamBadge} src={strTeamBadge} />
        </Link>
    </ul>
  </Paper>
</Grid>
);

export default Teams;