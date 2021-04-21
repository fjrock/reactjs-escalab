import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LeaguesContextProvider from "./contexts/LeaguesContext";


const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <LeaguesContextProvider>
       
        </LeaguesContextProvider>
      </Route>
    </Switch>
  </BrowserRouter>
);

export default App;
