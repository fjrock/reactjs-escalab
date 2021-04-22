import React, { Fragment, useContext } from "react";
import { LeaguesContext } from "./../../contexts/LeaguesContext";
import SearchLeagues from "./SearchLeagues";
import Leagues from "./Leagues";

const CountryLeagues = () => {
    const { leagues,validateC } = useContext(LeaguesContext);
    return (
        <Fragment>
            <SearchLeagues validateC={validateC} />
            {
               
               leagues.length === 0 ? (0): (
                   //leagues.countrys.length
                    <Leagues leagues={leagues.countrys} />
                   )
            }
        </Fragment>
    )
}

export default CountryLeagues;