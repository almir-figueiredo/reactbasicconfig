// rename routes as previously defined
import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import route1 from "./pages/route1";
import route2 from "./pages/route2";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={route1} />
      <Route path="/route2" exact component={route2} />
    </Switch>
  );
}
