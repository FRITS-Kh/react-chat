import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import PrivateRoute from '../containers/PrivateRoute';
import WelcomePage from '../containers/WelcomePage';
import ChatPage from '../containers/ChatPage';
import history from '../utils/history';
import configureStore from '../store';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route exact path="/(welcome)?" component={WelcomePage} />
        <PrivateRoute path="/chat/:chatId?" component={ChatPage} />
        <Redirect to="/" />
      </Switch>
    </Router>
  </Provider>
);

export default App;
