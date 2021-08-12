// unknown bug ....

import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Movies from "./Movies";
import MovieDetail from "./MovieDetail";
import NotFound from "./NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Movies />
        </Route>
        <Route
          path="/movies/:movie_id"
          render={(props) => <MovieDetail {...props} />}
        />
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
