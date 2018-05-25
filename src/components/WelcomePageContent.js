import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from 'material-ui/Paper';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import LoginForm from './LoginForm';
import CreateUserForm from './CreateUserForm';

const styles = theme => ({
  welcomeContent: {
    width: 500,
    position: 'relative',
    minHeight: 200,
    margin: `24px auto 0`,
  },
  tabContent: {
    padding: theme.spacing.unit * 3,
  },
});

class WelcomePageContent extends React.Component {
  state = {
    currentTab: 0,
  };

  handleChange = (event, currentTab) => {
    this.setState({ currentTab });
  };

  render() {
    const { classes, signup, login } = this.props;
    const { currentTab } = this.state;

    return (
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
    );
  }
}

export default withStyles(styles)(WelcomePageContent);
