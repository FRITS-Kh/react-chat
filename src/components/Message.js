import React from 'react';
import { withStyles } from 'material-ui/styles';
import { deepPurple } from 'material-ui/colors';
import classNames from 'classnames';
import Avatar from './Avatar';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';

const styles = theme => ({
  MessageItem: {
    display: 'flex',
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 3}px`,
    alignItems: `center`,
  },
  MessageItemMe: {
    flexDirection: `row-reverse`,
  },
  MessageText: {
    padding: theme.spacing.unit,
    marginLeft: theme.spacing.unit * 2,
    minWidth: `10%`,
    maxWidth: `70%`,
  },
  MessageTextMe: {
    backgroundColor: deepPurple[50],
    marginRight: theme.spacing.unit * 2,
  },
});

const Message = ({ classes, sender, content }) => {
  const isMessageFromMe = sender === 'me';
  return (
    <div
      className={classNames(
        classes.MessageItem,
        isMessageFromMe && classes.MessageItemMe,
      )}
    >
      <Avatar name={sender} />
      <Paper
        className={classNames(
          classes.MessageText,
          isMessageFromMe && classes.MessageTextMe,
        )}
      >
        <Typography variant="caption">{sender}</Typography>
        <Typography variant="body1">{content}</Typography>
        <Typography variant="caption" component="span">
          one day ago
        </Typography>
      </Paper>
    </div>
  );
};

export default withStyles(styles)(Message);
