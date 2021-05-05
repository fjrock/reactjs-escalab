import React, { Fragment, useContext } from "react";
import { TeamContext } from "./../../contexts/TeamContext";
import Detail from "./Detail";
import Loading from "./../Common/Loading";


const TeamsDetail = () => {
    const { team } = useContext(TeamContext);
    return (
        <Fragment>
            {
               team.length === 0 ? 
               (<Loading/>): 
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