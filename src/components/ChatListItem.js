import React from 'react';
import { ListItem, ListItemText } from 'material-ui/List';
import Avatar from './Avatar';

const ChatListItem = ({ title }) => (
  <ListItem button>
    <Avatar name={title} />
    <ListItemText primary={title} secondary="2 months ago" />
  </ListItem>
);

export default ChatListItem;
