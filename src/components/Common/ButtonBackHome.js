import React from 'react';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";

const ButtonBackHome = () => {
    const history = useHistory();
    const goBack = () => {history.push("/");}
    return(
        <Button variant="contained" color="primary" onClick={() => { goBack() }}>Go Back</Button>
)};

export default ButtonBackHome;