import React, { createContext, useState, useEffect, useCallback } from 'react';
import { leagueSearch, allCountries } from './../constants';
import { mergeCountryOptions } from '../utils/mergeCountryOptions';

export const LeaguesContext = createContext();

const LeaguesContextProvider = ({children}) => {

    const [leagues, setLeagues] = useState([]);
    const [countries, setCountries] = useState([]);
    const [data, setData] = useState(false);
    /** País elegido en el buscador (persiste al navegar a equipos y volver). */
    const [selectedCountry, setSelectedCountry] = useState('');
    
    useEffect(() => getCountries(), []);

    const getCountries = () => {
        fetch(allCountries())
        .then(res => res.json())
        .then((data) => {
            setCountries(mergeCountryOptions(data.countries));
        })
        .catch(err => console.log(err));
    }

    const getLeagues = useCallback((c) => {
        const name = String(c).trim();
        fetch(leagueSearch(name))
        .then(res => res.json())
        .then(payload => {
            const list = payload.countries ?? payload.countrys;
            if (list == null || !Array.isArray(list)) {
                setLeagues([]);
                setData(false);
            } else {
                setLeagues(list);
                setData(list.length > 0);
            }
        })
        .catch(err => console.log(err));
    }, []);

    const validateC = useCallback((c) => {
        if (c == null || String(c).trim() === '') {
            setSelectedCountry('');
            setLeagues([]);
            setData(false);
            return;
        }
        const name = String(c).trim();
        setSelectedCountry(name);
        getLeagues(name);
    }, [getLeagues]);

    return (
        <LeaguesContext.Provider value={{ leagues, validateC, countries, data, selectedCountry }}>
            { children }
        </LeaguesContext.Provider>
    );
}

export default LeaguesContextProvider;