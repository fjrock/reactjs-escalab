import React, { Fragment, useContext } from "react";
import { LeaguesContext } from "./../../contexts/LeaguesContext";
import SearchLeagues from "./SearchLeagues";
import Leagues from "./Leagues";
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const CountryLeagues = () => {
    const { leagues,validateC,countries } = useContext(LeaguesContext);
    return (
        <Fragment>
            <SearchLeagues validateC={validateC} countries={countries} />
            {
               leagues.length === 0 ? 
               (   
                <Container maxWidth={false}>
                    <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} />
                </Container>
               ): 
               (
                    <Leagues leagues={leagues.countrys} />
               )
            }
        </Fragment>
    )
}

export default CountryLeagues;