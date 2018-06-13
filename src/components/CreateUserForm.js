import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    marginTop: theme.spacing.unit * 2,
  },
});

class CreateUserForm extends React.Component {
  state = {
    username: {
      value: '',
      isValid: true,
    },
    password: {
      value: '',
      isValid: true,
    },
    repeatedPassword: {
      value: '',
      isValid: true,
    },
  };

  validate = () => {
    const { password, repeatedPassword } = this.state;
    const isValid = password.value === repeatedPassword.value;

    this.setState({
      password: { ...password, isValid },
      repeatedPassword: { ...repeatedPassword, isValid },
    });

    return isValid;
  };
  handleChangeInput = (event) => {
    event.persist();
    const { name, value } = event.target;
    this.setState(prevState => ({
      [name]: {
        ...prevState[name],
        value,
      },
    }));
  };
  handleSubmit = (event) => {
    event.preventDefault();
    if (!this.validate()) {
      return;
    }
    const { username, password } = this.state;

    this.props.onSubmit(username.value, password.value);
  };
  render() {
    const { classes } = this.props;
    const { username, password, repeatedPassword } = this.state;

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
          autoComplete="new-password"
          fullWidth
        />
        <TextField
          required
          label="Repeat password"
          placeholder="Repeat your password..."
          name="repeatedPassword"
          type="password"
          value={repeatedPassword.value}
          onChange={this.handleChangeInput}
          error={!repeatedPassword.isValid}
          margin="normal"
          autoComplete="new-password"
          fullWidth
        />
        <Button variant="raised" type="submit" color="primary" className={classes.button} fullWidth>
          Signup
        </Button>
      </form>
    );
  }
}
export default withStyles(styles)(CreateUserForm);
