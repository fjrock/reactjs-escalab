import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import Team from "./Team";
import { useLocation } from "react-router-dom";
import ButtonBack from "../Common/ButtonBack"

const Teams = ({ teams }) => {
  const location = useLocation();

  return(
    <Fragment>
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
  })
    }
    </Grid>
    <ButtonBack id={location} />
    </Fragment>
   
)};

export default Teams;