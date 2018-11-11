/* eslint no-underscore-dangle: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import classNames from 'classnames';
import moment from 'moment';
import Avatar from './Avatar';

import senderName from '../utils/sender-name';
import randomColor from '../utils/color-from';

const styles = theme => ({
  MessageItem: {
    display: 'flex',
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 3}px`,
    alignItems: 'center',
  },
  MessageItemMe: {
    flexDirection: 'row-reverse',
  },
  MessageText: {
    padding: theme.spacing.unit,
    marginLeft: theme.spacing.unit * 2,
    minWidth: '10%',
    maxWidth: '70%',
  },
  MessageTextMe: {
    backgroundColor: deepPurple[50],
    marginRight: theme.spacing.unit * 2,
  },
  statusMessage: {
    width: '100%',
    textAlign: 'center',
  },
  statusMessageUser: {
    display: 'inline',
  },
});

const Message = ({
  classes, content, sender, activeUser, createdAt, statusMessage,
}) => {
  const isMessageFromMe = sender._id === activeUser._id;
  const displayedName = senderName(sender);
  if (statusMessage) {
    return (
      <div className={classes.MessageItem}>
        <Typography className={classes.statusMessage}>
          <Typography
            variant="caption"
            style={{ color: randomColor(sender._id) }}
            className={classes.statusMessageUser}
          >
            {displayedName}
          </Typography>
          {content}
          <Typography variant="caption" component="span">
            {moment(createdAt).fromNow()}
          </Typography>
        </Typography>
      </div>
    );
  }
  return (
    <div className={classNames(classes.MessageItem, isMessageFromMe && classes.MessageItemMe)}>
      <Avatar colorFrom={sender._id} name={displayedName} />
      <Paper className={classNames(classes.MessageText, isMessageFromMe && classes.MessageTextMe)}>
        <Typography variant="caption" style={{ color: randomColor(sender._id) }}>
          {displayedName}
        </Typography>
        <Typography variant="body1">{content}</Typography>
        <Typography variant="caption" className={classes.time}>
          {moment(createdAt).fromNow()}
        </Typography>
      </Paper>
    </div>
  );
};

Message.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  content: PropTypes.string.isRequired,
  sender: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    username: PropTypes.string,
  }).isRequired,
  activeUser: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    username: PropTypes.string,
    isMember: PropTypes.bool.isRequired,
    isCreator: PropTypes.bool.isRequired,
    isChatMember: PropTypes.bool.isRequired,
  }).isRequired,
  createdAt: PropTypes.string.isRequired,
  statusMessage: PropTypes.bool,
};

Message.defaultProps = {
  statusMessage: false,
};

export default withStyles(styles)(Message);
