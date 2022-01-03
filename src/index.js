import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.10.0";

import Components from "views/Components/Components.js";

import TermOfUse from "views/TermOfUse/TermOfUse.js";
import FAQ from "views/FAQ/index.jsx";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/term-of-use" component={TermOfUse} />
      <Route path="/faq" component={FAQ} />
      <Route path="/" component={Components} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
