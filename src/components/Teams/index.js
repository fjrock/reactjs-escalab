import React, { Fragment, useContext } from "react";
import { TeamsContext } from "./../../contexts/TeamsContext";
import Teams from "./Teams";

const CountryTeams = () => {
    const { teams } = useContext(TeamsContext);
    return (
        <Fragment>
            {
               teams.length === 0 ? 
               (0): 
               (
               <Teams teams={teams.teams} />
               )
            }
        </Fragment>
    )
}

export default CountryTeams;