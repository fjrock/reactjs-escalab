import React, {createContext, useState} from 'react';
import {leagueSearch} from './../constants';

export const LeaguesContext = createContext();

const LeaguesContextProvider = ({children}) => {

    const [leagues, setLeagues] = useState([]);

    const getLeagues = c => {
        fetch(leagueSearch(c))
        .then(res => res.json())
        .then(data => {
            console.log(data.countrys);
            const {league_list} = data.countrys;
            setLeagues(league_list);
        })
        .catch(err => console.log(err));
    }

    const validateC = (e, c = document.querySelector('#q_c').value.toLowerCase().trim()) => {
        if(e.type === 'keypress' && e.key !== 'Enter') return ;
            getLeagues(c);
    }

    return (
        <LeaguesContext.Provider value={{ leagues, validateC}}>
            { children }
        </LeaguesContext.Provider>
    );
}

export default LeaguesContextProvider;