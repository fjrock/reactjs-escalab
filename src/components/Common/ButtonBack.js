import React from 'react';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";

const ButtonBack = ({id}) => {
    const history = useHistory();
    const goBack = () => {history.goBack()}
    console.log(id);
    return(
      
        <Button variant="contained" color="primary" onClick={() => { goBack() }}>Go Back</Button>
)};

export default ButtonBack;