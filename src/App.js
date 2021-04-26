import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LeaguesContextProvider from "./contexts/LeaguesContext";
import TeamsContextProvider from "./contexts/TeamsContext";
import Leagues from "./components/Leagues";
import Teams from "./components/Teams";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <LeaguesContextProvider>
       <Leagues/>
        </LeaguesContextProvider>
      </Route>
      <Route path="/teamscontext/teams/:id">
        <TeamsContextProvider>
          <Teams />
        </TeamsContextProvider>
      </Route>
    </Switch>
  </BrowserRouter>
);

export default App;
