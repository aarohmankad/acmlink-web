import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Home from './Home';
import Redirector from './Redirector';

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/:shorturl" component={Redirector} />
    </div>
  </Router>
)

export default App;