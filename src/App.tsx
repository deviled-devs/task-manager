import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import Canvas from "./components/Common/Canvas";

import Projects from "./containers/Projects";
import Contacts from "./containers/Contacts";
import Settings from "./containers/Settings";

import Firebase from "./firebase/Firebase";
import { FirebaseContext } from "./firebase/FirebaseContext";

const app_theme = {
  base: "#2b2e43",
  paper: "#2f3247",
  contrast: "#956ee5",
  font: "white",
  fontContrast: "#4c4f61"
};

const App = () => (
  <FirebaseContext.Provider value={new Firebase()}>
    <ThemeProvider theme={app_theme}>
      <Canvas>
        <Router>
          <Switch>
            <Route path="/" exact component={Projects} />
            <Route path="/projects" component={Projects} />
            <Route path="/contacts" exact component={Contacts} />
            <Route path="/settings" exact component={Settings} />
          </Switch>
        </Router>
      </Canvas>
    </ThemeProvider>
  </FirebaseContext.Provider>
);

export default App;
