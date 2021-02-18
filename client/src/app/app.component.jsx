/** Libraries */
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

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
    <Router>
      <Header />
      <Route path="/" exact component={StreamList} />
      <Route path="/streams/new" exact component={StreamCreate} />
      <Route path="/streams/edit" exact component={StreamEdit} />
      <Route path="/streams/delete" exact component={StreamDelete} />
      <Route path="/streams/show" exact component={StreamShow} />
    </Router>
  </div>
);

export default App;
