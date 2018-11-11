import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { ListItem, ListItemText } from '@material-ui/core';
import Avatar from './Avatar';

const styles = theme => ({
  activeItem: {
    backgroundColor: theme.palette.grey[200],
  },
});
const ChatListItem = ({
  title, classes, disabled, chatId, active, createdAt,
}) => (
  <ListItem
    button
    component={Link}
    to={`/chat/${chatId}`}
    className={active ? classes.activeItem : ''}
    disabled={disabled}
  >
    <Avatar colorFrom={chatId} name={title} />
    <ListItemText primary={title} secondary={moment(createdAt).fromNow()} />
  </ListItem>
);

ChatListItem.propTypes = {
  title: PropTypes.string.isRequired,
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  disabled: PropTypes.bool.isRequired,
  chatId: PropTypes.string.isRequired,
  active: PropTypes.bool,
  createdAt: PropTypes.string.isRequired,
};

ChatListItem.defaultProps = {
  active: null,
};

export default withStyles(styles)(ChatListItem);
