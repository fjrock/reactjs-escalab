import React from "react";
import sports from "./../../assets/img/sports.jpg";
import { Link } from 'react-router-dom';

const Home = () => (

    <Link to={`/leaguescontext/countries`}>
      <img className="photohome" alt={sports} src={sports} />
    </Link>
  
);

export default Home;
