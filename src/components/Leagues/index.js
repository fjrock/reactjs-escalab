import React, { Fragment, useContext } from "react";
import { LeaguesContext } from "./../../contexts/LeaguesContext";
import SearchLeagues from "./SearchLeagues";
import Leagues from "./Leagues";

const CountryLeagues = () => {
    const { leagues,validateC,countries } = useContext(LeaguesContext);
    return (
        <Fragment>
            <SearchLeagues validateC={validateC} countries={countries} />
            {
               leagues.length === 0 ? 
               (0): 

               (
                    <Leagues leagues={leagues.countrys} />
               )
            }
        </Fragment>
    )
}

export default CountryLeagues;