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
            if(data == null){
            const emptyArr = new Array(0);
            setTeam(emptyArr);
            }else{
            setTeam(data);
            }
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