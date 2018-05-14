import React from 'react';
import { withStyles } from 'material-ui/styles';
import Input from 'material-ui/Input';
import Paper from 'material-ui/Paper';

const styles = theme => ({
  textMessageInput: {
    position: 'fixed',
    right: theme.spacing.unit * 3,
    bottom: theme.spacing.unit * 3,
    left: 344,
    padding: theme.spacing.unit * 2,
  },
  input: {
    width: `100%`,
  },
});

const MessageInput = ({ classes }) => {
  return (
    <Paper className={classes.textMessageInput} elevation={6}>
      <Input
        placeholder="Type your message…"
        className={classes.input}
        inputProps={{
          'aria-label': 'Description',
        }}
      />
    </Paper>
  );
};

export default withStyles(styles)(MessageInput);
