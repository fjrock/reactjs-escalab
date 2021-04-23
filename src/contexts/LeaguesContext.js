import React, {createContext, useState, useEffect} from 'react';
import {leagueSearch,allCountries} from './../constants';

export const LeaguesContext = createContext();

const LeaguesContextProvider = ({children}) => {

    const [leagues, setLeagues] = useState([]);
    const [countries, setCountries] = useState([]);
    
    useEffect(() => getCountries(), []);

    const getCountries = () => {

        
        fetch(allCountries())
        .then(res => res.json())
        .then(data => {
            console.log(data.countries);
            setCountries(data.countries);
        })
        .catch(err => console.log(err));
    }


    const getLeagues = c => {
        console.log(leagueSearch(c));
        console.log('fetchc '+c);
        fetch(leagueSearch(c))
        .then(res => res.json())
        .then(data => {
            if(data.countrys == null){
                const emptyArr = new Array(0);
                setLeagues(emptyArr);
            }else{
                console.log('aqui es rotttt'+data);
                setLeagues(data);
            }
            
        })
        .catch(err => console.log(err));
    }


    const validateC = (c) => {
            getLeagues(c);
    }

    return (
        <LeaguesContext.Provider value={{ leagues, validateC, countries}}>
            { children }
        </LeaguesContext.Provider>
    );
}

export default LeaguesContextProvider;