import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import createHistory from "history/createBrowserHistory";

import AlbumSongs from "./AlbumSongs";
import AlbumsList from "./AlbumsList";

const App = () => {
  return (
    <div>
      <Router history={createHistory()}>
        <div>
          <Switch>
            <Route path="/" exact component={AlbumsList} />
            <Route path="/albums/:id" exact component={AlbumSongs} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
