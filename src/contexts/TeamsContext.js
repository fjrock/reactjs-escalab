import React, {createContext, useState, useEffect} from 'react';
import { useParams, useLocation } from 'react-router-dom';
import {
    lookupLeague,
    searchAllTeams,
    searchAllTeamsByLeagueId,
    eventsSeasonByLeague,
    lookupTableByLeague,
} from './../constants';

export const TeamsContext = createContext();

const asArray = (x) => {
    if (x == null) return [];
    return Array.isArray(x) ? x : [x];
};

/** Equipos únicos a partir de eventos de temporada (evita el tope de 10 de search_all_teams en API gratuita). */
const teamsFromSeasonEvents = (eventsRaw, idLeague) => {
    const idStr = String(idLeague);
    const events = asArray(eventsRaw);
    const byId = new Map();
    for (const e of events) {
        if (e == null || String(e.idLeague) !== idStr) continue;
        const add = (tid, name, badge) => {
            if (tid == null || tid === '') return;
            const key = String(tid);
            if (byId.has(key)) return;
            byId.set(key, {
                idTeam: key,
                strTeam: name || '',
                strBadge: badge || '',
                strLeague: e.strLeague,
                idLeague: e.idLeague,
                strSport: e.strSport || 'Soccer',
            });
        };
        add(e.idHomeTeam, e.strHomeTeam, e.strHomeTeamBadge);
        add(e.idAwayTeam, e.strAwayTeam, e.strAwayTeamBadge);
    }
    return [...byId.values()];
};

const mergeSearchTeams = (byId, list, idStr, strLeague) => {
    const matchesLeague = (t) =>
        String(t.idLeague) === idStr ||
        (strLeague && t.strLeague && t.strLeague === strLeague);
    let rows = asArray(list).filter(matchesLeague);
    if (!rows.length) rows = asArray(list);
    for (const t of rows) {
        if (t?.idTeam == null) continue;
        const key = String(t.idTeam);
        byId.set(key, t);
    }
};

/** Filas de lookuptable → mismos campos que equipos de eventos (escudo sin /tiny). */
const teamsFromLeagueTable = (tableRaw, idLeague) => {
    const idStr = String(idLeague);
    const out = [];
    for (const row of asArray(tableRaw)) {
        if (row == null || String(row.idLeague) !== idStr || row.idTeam == null) continue;
        let badge = row.strBadge;
        if (badge && typeof badge === 'string') badge = badge.replace(/\/tiny$/, '');
        out.push({
            idTeam: String(row.idTeam),
            strTeam: row.strTeam || '',
            strBadge: badge || '',
            strLeague: row.strLeague,
            idLeague: row.idLeague,
            strSport: 'Soccer',
        });
    }
    return out;
};

const mergeTableTeams = (byId, tableRaw, idLeague) => {
    for (const t of teamsFromLeagueTable(tableRaw, idLeague)) {
        const k = t.idTeam;
        if (!byId.has(k)) {
            byId.set(k, t);
            continue;
        }
        const cur = byId.get(k);
        if ((!cur.strBadge || !String(cur.strBadge).trim()) && t.strBadge) {
            byId.set(k, { ...cur, strBadge: t.strBadge });
        }
    }
};

const mergeEventTeamsInto = (byId, eventsRaw, idLeague) => {
    for (const t of teamsFromSeasonEvents(eventsRaw, idLeague)) {
        byId.set(t.idTeam, t);
    }
};

const TeamsContextProvider = ({children}) => {
    const { id } = useParams();
    const location = useLocation();
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        if (id == null || id === '') {
            setTeams([]);
            return;
        }
        let cancelled = false;

        const load = async () => {
            const st = location.state;
            let strLeague = st?.strLeague;
            let strCurrentSeason = '';

            try {
                const lr = await fetch(lookupLeague(id));
                const ld = await lr.json();
                const lg = ld?.leagues?.[0];
                if (!lg) {
                    if (!cancelled) setTeams([]);
                    return;
                }
                if (!strLeague) strLeague = lg.strLeague;
                strCurrentSeason = lg.strCurrentSeason != null ? String(lg.strCurrentSeason).trim() : '';
            } catch (e) {
                if (!cancelled) console.log(e);
                if (!strLeague) {
                    if (!cancelled) setTeams([]);
                    return;
                }
            }

            if (!strLeague) {
                if (!cancelled) setTeams([]);
                return;
            }

            const idStr = String(id);
            const byId = new Map();

            try {
                const er1 = await fetch(eventsSeasonByLeague(id, strCurrentSeason));
                const ed1 = await er1.json();
                mergeEventTeamsInto(byId, ed1?.events, id);
            } catch (e) {
                if (!cancelled) console.log(e);
            }

            try {
                const er2 = await fetch(eventsSeasonByLeague(id, ''));
                const ed2 = await er2.json();
                mergeEventTeamsInto(byId, ed2?.events, id);
            } catch (e) {
                if (!cancelled) console.log(e);
            }

            try {
                const tb1 = await fetch(lookupTableByLeague(id, strCurrentSeason));
                const td1 = await tb1.json();
                mergeTableTeams(byId, td1?.table, id);
            } catch (e) {
                if (!cancelled) console.log(e);
            }

            try {
                const tb2 = await fetch(lookupTableByLeague(id, ''));
                const td2 = await tb2.json();
                mergeTableTeams(byId, td2?.table, id);
            } catch (e) {
                if (!cancelled) console.log(e);
            }

            try {
                const tr = await fetch(searchAllTeamsByLeagueId(id));
                const td = await tr.json();
                mergeSearchTeams(byId, td?.teams, idStr, strLeague);
            } catch (e) {
                if (!cancelled) console.log(e);
            }

            try {
                const trn = await fetch(searchAllTeams(strLeague));
                const tdn = await trn.json();
                mergeSearchTeams(byId, tdn?.teams, idStr, strLeague);
            } catch (e) {
                if (!cancelled) console.log(e);
            }

            let chosen = [...byId.values()].filter((t) => t?.idTeam != null);
            chosen.sort((a, b) =>
                String(a.strTeam || '').localeCompare(String(b.strTeam || ''), undefined, { sensitivity: 'base' })
            );
            if (!cancelled) setTeams(chosen);
        };

        load();
        return () => {
            cancelled = true;
        };
    }, [id, location.key, location.state]);

    return (
        <TeamsContext.Provider value={{teams}}>
            { children }
        </TeamsContext.Provider>
    );
}

export default TeamsContextProvider;