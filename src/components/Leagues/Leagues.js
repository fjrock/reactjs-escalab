import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import League from "./League";

const Leagues = ({ leagues }) => (

    <Fragment>
        <Grid container spacing={3} justify="center">
        { 
        leagues.map((league) => {
          const {
              idLeague, 
              strLeague, 
              strSport, 
              strLogo,
              strBadge 
          }= league;
          return (
            <League
              key={idLeague}
              idLeague={idLeague}
              strLeague={strLeague}
              strSport={strSport}
              strLogo={strLogo}
              strBadge={strBadge}
            />
            );
        })
        }
        </Grid>
    </Fragment>    
);


export default Leagues;