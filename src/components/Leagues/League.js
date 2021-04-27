import React from "react";
import { Link } from 'react-router-dom';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from '@material-ui/core/Button';

const League = ({ idLeague, strLeague, strSport, strLogo, strBadge }) => (
<Grid item xs={12} sm={6}>
  <Paper >
  <h3>{strLeague}</h3>
    <ul>
        <li>
        <Link to={`/teamscontext/teams/${idLeague}`}>
            <img alt={strBadge} src={strBadge} />
            <strong>Type:</strong>
            <span>{strSport}</span>

        </Link>
            
        </li>
    </ul>
    
  </Paper>

</Grid>

);

export default League;