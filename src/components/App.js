import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import WelcomePage from './WelcomePage';
import ChatPage from './ChatPage';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/(welcome)?" component={WelcomePage} />
      <Route path="/chat" component={ChatPage} />
      <Redirect to="/" />
    </Switch>
  </Router>
);

export default App;
