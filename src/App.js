import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LeaguesContextProvider from "./contexts/LeaguesContext";
import Leagues from "./components/Leagues";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <LeaguesContextProvider>
       <Leagues/>
        </LeaguesContextProvider>
      </Route>
    </Switch>
  </BrowserRouter>
);

export default App;
