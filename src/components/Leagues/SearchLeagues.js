import React from "react";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

const SearchLeagues = ({validateC}) => (

<Paper>
    <TextField
     id="q_c"
     label="League"
     margin="normal"
     variant="outlined"
      
    />
    <IconButton onClick={(e) => validateC(e)}>
      <SearchIcon />
    </IconButton>
  </Paper>

);

export default SearchLeagues;