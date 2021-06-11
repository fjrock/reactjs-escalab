import React, { Suspense,lazy } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LeaguesContextProvider from "./contexts/LeaguesContext";
import TeamsContextProvider from "./contexts/TeamsContext";
import TeamContextProvider from "./contexts/TeamContext";
import NotFound from "./components/NotFound";
import Header from "./components/Common/Header";
import Footer from "./components/Common/Footer";
import Loading from "./components/Common/Loading";
import "./assets/css/styles.css";
import Home from "./components/Common/Home";
const Leagues = lazy(() => import('./components/Leagues'));
const Teams = lazy(() => import('./components/Teams'));
const TeamDetail = lazy(() => import('./components/Teams/TeamDetail'));


const App = () => (
  <BrowserRouter>
   <Header/>
   <Suspense fallback={<div><Loading /></div>}>
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
    </Suspense>

    <Footer />
  </BrowserRouter>
);

export default App;
