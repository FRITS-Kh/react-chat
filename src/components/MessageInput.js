import React from 'react';
import { withStyles } from 'material-ui/styles';
import Input from 'material-ui/Input';
import Paper from 'material-ui/Paper';

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

const MessageInput = ({ classes }) => (
  <Paper className={classes.messageInputWrap} elevation={6}>
    <Input
      placeholder="Type your message…"
      className={classes.messageInput}
      inputProps={{
        'aria-label': 'Description',
      }}
    />
  </Paper>
);

export default withStyles(styles)(MessageInput);
