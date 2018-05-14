import React from 'react';
import { withStyles } from 'material-ui/styles';
import { deepPurple } from 'material-ui/colors';
import classNames from 'classnames';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';

const styles = theme => ({
  textMessage: {
    padding: theme.spacing.unit,
    marginLeft: theme.spacing.unit * 2,
    minWidth: `10%`,
    maxWidth: `70%`,
  },
  textMessageUser: {
    backgroundColor: deepPurple[50],
    marginRight: theme.spacing.unit * 2,
  },
});

const Message = ({ classes, message, isMessageFromMe }) => {
  return (
    <Paper
      className={classNames(
        classes.textMessage,
        isMessageFromMe && classes.textMessageUser,
      )}
    >
      <Typography variant="caption">{message.sender}</Typography>
      <Typography variant="body1">{message.content}</Typography>
      <Typography variant="caption" component="span">
        one day ago
      </Typography>
    </Paper>
  );
};

export default withStyles(styles)(Message);
