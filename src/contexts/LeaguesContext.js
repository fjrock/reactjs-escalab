import React, {createContext, useState} from 'react';
import {leagueSearch} from './../constants';

export const LeaguesContext = createContext();

const LeaguesContextProvider = ({children}) => {

    const [leagues, setLeagues] = useState([]);

    const getLeagues = c => {
        fetch(leagueSearch(c))
        .then(res => res.json())
        .then(data => {
            if(data.countrys == null){
                const emptyArr = new Array(0);
                setLeagues(emptyArr);
            }else{
                console.log(data);
                setLeagues(data);
            }
            
        })
        .catch(err => console.log(err));
    }

    const validateC = (e, c = document.querySelector('#q_c').value.toLowerCase().trim()) => {
            getLeagues(c);
    }

    return (
        <LeaguesContext.Provider value={{ leagues, validateC}}>
            { children }
        </LeaguesContext.Provider>
    );
}

export default LeaguesContextProvider;