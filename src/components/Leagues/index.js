import React, { Fragment, useContext } from "react";
import { LeaguesContext } from "./../../contexts/LeaguesContext";

const Leagues = () => {
    const { leagues,validateC } = useContext(LeaguesContext);
    return (
        <Fragment>
        </Fragment>
    )
}

export default Leagues;