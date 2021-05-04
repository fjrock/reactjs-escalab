import React, {createContext, useState, useEffect} from 'react';
import {leagueSearch,allCountries} from './../constants';

export const LeaguesContext = createContext();

const LeaguesContextProvider = ({children}) => {

    const [leagues, setLeagues] = useState([]);
    const [countries, setCountries] = useState([]);
    const [data, setData] = useState(false);
    
    useEffect(() => getCountries(), []);

    const getCountries = () => {
        fetch(allCountries())
        .then(res => res.json())
        .then(data => {
            setCountries(data.countries);
            
        })
        .catch(err => console.log(err));
    }

    const getLeagues = c => {
        fetch(leagueSearch(c))
        .then(res => res.json())
        .then(data => {
            if(data.countrys == null){
                const emptyArr = new Array(0);
                setLeagues(emptyArr);
            }else{
                setLeagues(data);
                setData(true);
            }  
        })
        .catch(err => console.log(err));
    }


    const validateC = (c) => {
            getLeagues(c);
    }

    return (
        <LeaguesContext.Provider value={{ leagues, validateC, countries, data}}>
            { children }
        </LeaguesContext.Provider>
    );
}

export default LeaguesContextProvider;