// v1 API: https://www.thesportsdb.com/documentation#v1 — clave pública gratuita 123
const apiKey = process.env.REACT_APP_THESPORTSDB_API_KEY || '123';
const base_url = `https://www.thesportsdb.com/api/v1/json/${apiKey}/`;
const league_search = 'search_all_leagues.php?c=';
const all_countries ='all_countries.php';
const lookup_league = 'lookupleague.php?id=';
const lookup_team ='lookupteam.php?id=';

const events_season = 'eventsseason.php';

/**
 * Equipos por nombre de liga (solo parámetro `l` en la URL).
 * API gratuita: máx. 10 filas en search_all_teams.
 */
export const searchAllTeams = (strLeague) => {
  const l = String(strLeague || '').trim().replace(/\s+/g, '_');
  const params = new URLSearchParams();
  if (l) params.set('l', l);
  return `${base_url}search_all_teams.php?${params.toString()}`;
};

/** Misma búsqueda pero por id de liga (sigue limitada a 10 en plan gratuito). */
export const searchAllTeamsByLeagueId = (idLeague) => {
  const params = new URLSearchParams();
  params.set('id', String(idLeague));
  return `${base_url}search_all_teams.php?${params.toString()}`;
};

/** Partidos de la temporada: en plan gratuito devuelve pocas filas pero basta para listar equipos únicos. */
export const eventsSeasonByLeague = (idLeague, strSeason) => {
  const params = new URLSearchParams();
  params.set('id', String(idLeague));
  const s = strSeason != null ? String(strSeason).trim() : '';
  if (s) params.set('s', s);
  return `${base_url}${events_season}?${params.toString()}`;
};

/** Tabla de posiciones (plan gratuito ~5 filas): suma equipos que a veces no salen en el lote de eventos. */
export const lookupTableByLeague = (idLeague, strSeason) => {
  const params = new URLSearchParams();
  params.set('l', String(idLeague));
  const s = strSeason != null ? String(strSeason).trim() : '';
  if (s) params.set('s', s);
  return `${base_url}lookuptable.php?${params.toString()}`;
};

export const leagueSearch = (c) =>
  `${base_url}${league_search}${encodeURIComponent(String(c).trim())}`;
export const allCountries = () => `${ base_url }${ all_countries }`;
export const lookupLeague = id => `${ base_url }${ lookup_league }${ encodeURIComponent(id) }`;
export const lookupTeam = id => `${ base_url }${ lookup_team }${ id }`;