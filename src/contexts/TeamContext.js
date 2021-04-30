import React, {createContext, useState, useEffect} from 'react';
import {lookupTeam} from './../constants';

export const TeamContext = createContext();

const TeamContextProvider = ({children}) => {
    const id = window.location.pathname.split("/")[3];
    
    useEffect(() => getTeam(id), [id]);

    const [team, setTeam] = useState([]);

    const getTeam = id => {
        fetch(lookupTeam(id))
        .then(res => res.json())
        .then(data => {
            setTeam(data);
        })
        .catch(err => console.log(err));
    }

    return (
        <TeamContext.Provider value={{team}}>
            { children }
        </TeamContext.Provider>
    );
}

export default TeamContextProvider;