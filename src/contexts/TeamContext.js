import React, {createContext, useState, useEffect} from 'react';
import { useParams, useLocation } from 'react-router-dom';
import {lookupTeam} from './../constants';

export const TeamContext = createContext();

const TeamContextProvider = ({children}) => {
    const { id } = useParams();
    const location = useLocation();
    const [team, setTeam] = useState(null);

    useEffect(() => {
        if (id == null || id === '') {
            setTeam([]);
            return;
        }
        let cancelled = false;
        const fromList = location.state && location.state.team;
        if (fromList && String(fromList.idTeam) === String(id)) {
            setTeam([fromList]);
            return () => {
                cancelled = true;
            };
        }

        setTeam(null);
        fetch(lookupTeam(id))
            .then(res => res.json())
            .then(payload => {
                if (cancelled) return;
                const list = Array.isArray(payload?.teams) ? payload.teams : [];
                const first = list[0];
                if (!first) {
                    setTeam([]);
                    return;
                }
                if (String(first.idTeam) !== String(id)) {
                    setTeam([]);
                    return;
                }
                setTeam(list);
            })
            .catch(err => {
                if (!cancelled) console.log(err);
            });
        return () => {
            cancelled = true;
        };
    }, [id, location.key, location.state]);

    return (
        <TeamContext.Provider value={{team}}>
            { children }
        </TeamContext.Provider>
    );
}

export default TeamContextProvider;