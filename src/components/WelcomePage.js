import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Redirect } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import Header from './Header';
import LoginForm from './LoginForm';
import CreateUserForm from './CreateUserForm';

import ErrorMessage from './ErrorMessage';

const styles = theme => ({
  welcomePageWrap: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    backgroundColor: theme.palette.background.default,
    height: '100vh',
    width: '100%',
  },
  welcomePage: {
    width: '100%',
  },
  welcomeContent: {
    width: 500,
    position: 'relative',
    minHeight: 200,
    margin: '24px auto 0',
  },
  tabContent: {
    padding: theme.spacing.unit * 3,
  },
});

class WelcomePage extends React.Component {
  static propTypes = {
    classes: PropTypes.objectOf(PropTypes.string).isRequired,
    signup: PropTypes.func.isRequired,
    login: PropTypes.func.isRequired,
    receiveAuth: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
    error: PropTypes.instanceOf(Error),
  };

  static defaultProps = {
    error: null,
  };

  state = {
    currentTab: 0,
  };

  componentDidMount() {
    this.props.receiveAuth();
  }

  handleChange = (event, currentTab) => {
    this.setState({ currentTab });
  };

  render() {
    const {
      classes, signup, login, isAuthenticated, error,
    } = this.props;
    const { currentTab } = this.state;
    if (isAuthenticated) {
      return <Redirect to="/chat" />;
    }
    return (
      <div className={classes.welcomePageWrap}>
        <div className={classes.welcomePage}>
          <Header position="static" title="DogeCodes React Chat" activeUser={false} />
          <Paper className={classes.welcomeContent}>
            <AppBar position="static" color="default">
              <Tabs
                value={currentTab}
                onChange={this.handleChange}
                indicatorColor="secondary"
                textColor="inherit"
                fullWidth
              >
                <Tab label="Login" />
                <Tab label="Sign Up" />
              </Tabs>
            </AppBar>
            <div className={classes.tabContent}>
              {currentTab === 0 && <LoginForm onSubmit={login} />}
              {currentTab === 1 && <CreateUserForm onSubmit={signup} />}
            </div>
          </Paper>
        </div>
        <ErrorMessage error={error} />
      </div>
    );
  }
}

export default withStyles(styles)(WelcomePage);
