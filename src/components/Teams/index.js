import React, { Fragment, useContext } from "react";
import { TeamsContext } from "./../../contexts/TeamsContext";
import Teams from "./Teams";
import Loading from "./../Common/Loading";

const CountryTeams = () => {
    const { teams } = useContext(TeamsContext);
    return (
        <Fragment>
            {
               teams.length === 0 ? 
               (<Loading/>): 
               (
               <Teams teams={teams.teams} />
               )
            }
        </Fragment>
    )
}

export default CountryTeams;