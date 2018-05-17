import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    marginTop: theme.spacing.unit * 2,
  },
});

class LoginForm extends React.Component {
  state = {
    username: {
      value: '',
      isValid: true,
    },
    password: {
      value: '',
      isValid: true,
    },
  };
  handleChangeInput = event => {
    event.persist();
    const { name, value } = event.target;
    this.setState(prevState => ({
      [name]: {
        ...prevState[name],
        value,
      },
    }));
  };
  handleSubmit = event => {
    event.preventDefault();
    const { username, password } = this.state;
    console.log('Login: ', username.value, password.value);
  };
  render() {
    const { classes } = this.props;
    const { username, password } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <TextField
          required
          label="Username"
          placeholder="Type your username..."
          name="username"
          type="text"
          value={username.value}
          onChange={this.handleChangeInput}
          error={!username.isValid}
          margin="normal"
          autoComplete="username"
          fullWidth
        />
        <TextField
          required
          label="Password"
          placeholder="Type your password..."
          name="password"
          type="password"
          value={password.value}
          onChange={this.handleChangeInput}
          error={!password.isValid}
          margin="normal"
          autoComplete="current-password"
          fullWidth
        />
        <Button
          variant="raised"
          type="submit"
          color="primary"
          className={classes.button}
          fullWidth
        >
          Login
        </Button>
      </form>
    );
  }
}
export default withStyles(styles)(LoginForm);
