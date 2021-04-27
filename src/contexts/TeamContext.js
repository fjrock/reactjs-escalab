import React, {createContext, useState, useEffect} from 'react';
import {lookupTeam} from './../constants';

export const TeamContext = createContext();

const TeamContextProvider = ({children}) => {
    const id = window.location.pathname.split("/")[3];

    console.log('aqui pasa el id team'+id)
    
    useEffect(() => getTeam(id), [id]);

    const [team, setTeam] = useState([]);


    const getTeam = id => {
        console.log('lleggooo');
        fetch(lookupTeam(id))
        .then(res => res.json())
        .then(data => {
            console.log('detalles rquipo')
           console.log(data);
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