import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import Team from "./Team";

const Teams = ({ teams }) => {
  return(
    <Fragment>

    <Grid container spacing={3} justify="center" alignItems="stretch">
    {teams.map((team) => (
      <Team key={team.idTeam} team={team} />
    ))}
  </Grid>

    </Fragment>
  );
};

export default Teams;