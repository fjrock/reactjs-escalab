import React, { Suspense, lazy } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import LeaguesContextProvider from "./contexts/LeaguesContext";
import TeamsContextProvider from "./contexts/TeamsContext";
import TeamContextProvider from "./contexts/TeamContext";
import NotFound from "./components/NotFound";
import Header from "./components/Common/Header";
import Footer from "./components/Common/Footer";
import Loading from "./components/Common/Loading";
import { appTheme } from "./theme";
import "./assets/css/styles.css";
import Home from "./components/Common/Home";
const Leagues = lazy(() => import('./components/Leagues'));
const Teams = lazy(() => import('./components/Teams'));
const TeamDetail = lazy(() => import('./components/Teams/TeamDetail'));

const shellStyle = {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
};

const mainStyle = {
  flexGrow: 1,
};

const App = () => (
  <ThemeProvider theme={appTheme}>
    <CssBaseline />
    <BrowserRouter>
      <div style={shellStyle}>
        <Header />
        <main style={mainStyle}>
          <LeaguesContextProvider>
            <Suspense fallback={<Loading />}>
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/leaguescontext/countries">
                  <Leagues />
                </Route>
                <Route path="/teamscontext/teams/:id">
                  <TeamsContextProvider>
                    <Teams />
                  </TeamsContextProvider>
                </Route>
                <Route path="/teamcontext/team/:id">
                  <TeamContextProvider>
                    <TeamDetail />
                  </TeamContextProvider>
                </Route>
                <Route component={NotFound} />
              </Switch>
            </Suspense>
          </LeaguesContextProvider>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
