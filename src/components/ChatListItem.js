import React from 'react';
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
  title,
  classes,
  disabled,
  chatId,
  active,
  createdAt,
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

export default withStyles(styles)(ChatListItem);
