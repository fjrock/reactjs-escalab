const base_url = 'https://www.thesportsdb.com/api/v1/json/1/';
const league_search = 'search_all_leagues.php?c=';
const all_countries ='all_countries.php';
const lookup_all_teams ='lookup_all_teams.php?id=';
const lookup_team ='lookupteam.php?id=';

export const leagueSearch = c => `${ base_url }${ league_search }${ c }`;
export const allCountries = () => `${ base_url }${ all_countries }`;
export const lookupAllTeams = id => `${ base_url }${ lookup_all_teams }${ id }`;
export const lookupTeam = id => `${ base_url }${ lookup_team }${ id }`;