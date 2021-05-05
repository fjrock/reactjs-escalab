import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LeaguesContextProvider from "./contexts/LeaguesContext";
import TeamsContextProvider from "./contexts/TeamsContext";
import TeamContextProvider from "./contexts/TeamContext";
import Leagues from "./components/Leagues";
import Teams from "./components/Teams";
import TeamDetail from "./components/Teams/TeamDetail";
import NotFound from "./components/NotFound";
import Header from "./components/Common/Header";
import Footer from "./components/Common/Footer";
import "./assets/css/styles.css";
import Home from "./components/Common/Home";

const App = () => (
  <BrowserRouter>
   <Header />
    <Switch>
      <Route exact path="/">
      <Home/>
      </Route>
      <Route path="/leaguescontext/countries">
      <LeaguesContextProvider>
         <Leagues/>
        </LeaguesContextProvider>
      </Route>
      <Route path="/teamscontext/teams/:id">
        <TeamsContextProvider>
          <Teams/>
        </TeamsContextProvider>
      </Route>
      <Route path="/teamcontext/team/:id">
        <TeamContextProvider>
        <TeamDetail/>
        </TeamContextProvider>
      </Route>
      <Route component={NotFound} />
    </Switch>
    <Footer />
  </BrowserRouter>
);

export default App;
