import React, { useState} from 'react';
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import MenuItem from '@material-ui/core/MenuItem';

const SearchLeagues = ({validateC, countries}) => {

const [country, setCountry] = useState('');  

const handleChange = (event) => {
  setCountry(event.target.value);
};
//const {countries_list }= countries;
return(
<Paper>
    <TextField
     select
     value={country}
     onChange={handleChange}
     label="League"
     margin="normal"
    >
      {countries.map((c) => (
              <MenuItem
                key={c.name_en}
                value={c.name_en}
              >
                {c.name_en}
              </MenuItem>
            ))}
    </TextField>
    <IconButton onClick={() => validateC(country)}>
      <SearchIcon />
    </IconButton>
  </Paper>
);
};

export default SearchLeagues;