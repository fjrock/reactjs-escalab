import React, { Fragment, useContext } from "react";
import { TeamContext } from "./../../contexts/TeamContext";
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
                        strTeamJersey,
                        strDescriptionEN,
                        strStadium 
                         
                      }= team;
                      return (
                        <Detail
                          key={idTeam}
                          idTeam={idTeam}
                          strAlternate={strAlternate}
                          strTeamJersey={strTeamJersey}
                          strDescriptionEN={strDescriptionEN}
                          strStadium={strStadium}
                        />
                        );
                    })
                    
            
               )
            }
        </Fragment>
    )
}

export default TeamsDetail;