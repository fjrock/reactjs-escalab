import React, { Fragment, useContext } from "react";
import { LeaguesContext } from "./../../contexts/LeaguesContext";
import SearchLeagues from "./SearchLeagues"

const Leagues = () => {
    const { leagues,validateC } = useContext(LeaguesContext);
    return (
        <Fragment>
            <SearchLeagues validateC={validateC} />
            {
               
               leagues.length === 0 ? (0): (leagues.countrys.length)
            }
        </Fragment>
    )
}

export default Leagues;