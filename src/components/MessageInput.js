import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  messageInputWrap: {
    position: 'fixed',
    right: theme.spacing.unit * 3,
    bottom: theme.spacing.unit * 3,
    left: 344,
    padding: theme.spacing.unit * 2,
  },
  messageInput: {
    width: `100%`,
  },
});

class MessageInput extends React.Component {
  state = {
    value: '',
  };

  handleValueChange = event => {
    this.setState({
      value: event.target.value,
    });
  };

  handleKeyPress = event => {
    const { value } = this.state;

    if (event.key === 'Enter' && value) {
      this.props.sendMessage(value);
      this.setState({ value: '' });
    }
  };

  render() {
    const { classes, showJoinButton, onJoinButtonClick } = this.props;

    return (
      <Paper className={classes.messageInputWrap} elevation={6}>
        {showJoinButton ? (
          <Button
            fullWidth
            variant="raised"
            color="primary"
            onClick={onJoinButtonClick}
          >
            Join
          </Button>
        ) : (
          <Input
            placeholder="Type your message…"
            className={classes.messageInput}
            inputProps={{
              'aria-label': 'Description',
            }}
            value={this.state.value}
            onChange={this.handleValueChange}
            onKeyPress={this.handleKeyPress}
          />
        )}
      </Paper>
    );
  }
}

export default withStyles(styles)(MessageInput);
