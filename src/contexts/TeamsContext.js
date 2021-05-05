import React, {createContext, useState, useEffect} from 'react';
import {lookupAllTeams} from './../constants';

export const TeamsContext = createContext();

const TeamsContextProvider = ({children}) => {
    const id = window.location.pathname.split("/")[3];
    
    useEffect(() => getTeams(id), [id]);

    const [teams, setTeams] = useState([]);

    const getTeams = id => {
        fetch(lookupAllTeams(id))
        .then(res => res.json())
        .then(data => {

            if(data == null){
                const emptyArr = new Array(0);
                setTeams(emptyArr);
                }else{
                setTeams(data);
                }
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