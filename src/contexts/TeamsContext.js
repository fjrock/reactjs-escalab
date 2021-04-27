import React, {createContext, useState, useEffect} from 'react';
import {lookupAllTeams} from './../constants';

export const TeamsContext = createContext();

const TeamsContextProvider = ({children}) => {
    const id = window.location.pathname.split("/")[3];

    console.log('aqui pasa el id '+id)
    
    useEffect(() => getTeams(id), [id]);

    const [teams, setTeams] = useState([]);


    const getTeams = id => {
        console.log('lleggooo');
        fetch(lookupAllTeams(id))
        .then(res => res.json())
        .then(data => {
           console.log(data);
            setTeams(data);
            
        })
        .catch(err => console.log(err));
    }

    return (
        <TeamsContext.Provider value={{teams}}>
            { children }
        </TeamsContext.Provider>
    );
}

export default TeamsContextProvider;