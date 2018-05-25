import React from 'react';
import { withStyles } from 'material-ui/styles';
import { Redirect } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import WelcomePageContent from './WelcomePageContent';

const styles = theme => ({
  welcomePageWrap: {
    display: 'flex',
    flexWrap: `wrap`,
    justifyContent: `center`,
    backgroundColor: theme.palette.background.default,
    height: `100vh`,
    width: `100%`,
  },
  welcomePage: {
    width: `100%`,
  },
});

class WelcomePage extends React.Component {
  render() {
    const { classes, signup, login, isAuthenticated } = this.props;
    if (isAuthenticated) {
      return <Redirect to="/chat" />;
    }
    return (
      <div className={classes.welcomePageWrap}>
        <div className={classes.welcomePage}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="title" color="inherit" noWrap>
                DogeCodes React Chat
              </Typography>
            </Toolbar>
          </AppBar>
          <WelcomePageContent signup={signup} login={login} />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(WelcomePage);
