import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import Team from "./Team";

const Teams = ({ teams }) => {
  return(
    <Fragment>

  {    
    <Grid container spacing={3} justify="center">
    { 
    teams.map((team) => {
    const {
        idTeam, 
        strTeam,
        strTeamBadge
    }= team;
    return (
      <Team
        key={idTeam}
        idTeam={idTeam}
        strTeam={strTeam}
        strTeamBadge={strTeamBadge}
      />
      );
  }
  ) 
  } 
  </Grid>
}


    </Fragment>
)};

export default Teams;