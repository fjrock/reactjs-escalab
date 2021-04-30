import React from "react";
import { Link } from 'react-router-dom';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from '@material-ui/core/Button';

const Detail = ({idTeam, strAlternate,strTeamJersey }) => (
<Grid item xs={12} sm={6}>
  <Paper >
  <h3>{strAlternate}</h3>
    <ul>
        <li>
        
            <img alt={strTeamJersey} src={strTeamJersey} />
            <strong>Name:</strong>
            <span>{idTeam}</span>
            <span>{strAlternate}</span>
            
           
        </li>
    </ul>
  </Paper>
</Grid>

);

export default Detail;