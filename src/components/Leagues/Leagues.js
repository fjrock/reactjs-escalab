import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import League from "./League";

const Leagues = ({ leagues }) => (

    <Fragment>
        <Grid container spacing={3} justify="center" alignItems="stretch">
        { 
        leagues.map((league) => {
          const {
              idLeague, 
              strLeague, 
              strSport,
              strCountry,
              strLogo,
              strBadge 
          }= league;
          return (
            <League
              key={idLeague}
              idLeague={idLeague}
              strLeague={strLeague}
              strSport={strSport}
              strCountry={strCountry}
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