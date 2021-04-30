import React, { Fragment, useContext } from "react";
import { TeamContext } from "./../../contexts/TeamContext";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Detail from "./Detail"


const TeamsDetail = () => {
    const { team } = useContext(TeamContext);
    return (
        <Fragment>
            {
               team.length === 0 ? 
               (0): 
               (
                    team.teams.map((team) => {
                      const {
                        idTeam, 
                        strAlternate,
                        strTeamJersey 
                         
                      }= team;
                      return (
                        <Detail
                          key={idTeam}
                          idTeam={idTeam}
                          strAlternate={strAlternate}
                          strTeamJersey={strTeamJersey}
                        />
                        );
                    })
                    
            
               )
            }
        </Fragment>
    )
}

export default TeamsDetail;