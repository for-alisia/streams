// @ts-nocheck
/** Libraries */
import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

/** Router */
import history from '../history';

/** Components */
import {
  StreamList,
  StreamShow,
  StreamCreate,
  StreamEdit,
  StreamDelete,
} from '../components/streams';
import { Header } from '../components/ui';

const App = () => (
  <div className="ui container">
    <Router history={history}>
      <Header />
      <Switch>
        <Route path="/" exact component={StreamList} />
        <Route path="/streams/new" exact component={StreamCreate} />
        <Route path="/streams/edit/:id" exact component={StreamEdit} />
        <Route path="/streams/delete/:id" exact component={StreamDelete} />
        <Route path="/streams/:id" exact component={StreamShow} />
      </Switch>
    </Router>
  </div>
);

export default App;
