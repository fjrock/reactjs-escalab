const base_url = 'https://www.thesportsdb.com/api/v1/json/1/';
const league_search = 'search_all_leagues.php?c=';
const all_countries ='all_countries.php';

export const leagueSearch = c => `${ base_url }${ league_search }${ c }`;
export const allCountries = () => `${ base_url }${ all_countries }`;