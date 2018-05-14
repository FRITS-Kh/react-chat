import React from 'react';
import { ListItem, ListItemText } from 'material-ui/List';
import UserAvatar from './UserAvatar';

const ChatListItem = ({ chat, index }) => {
  return (
    <ListItem key={index} button>
      <UserAvatar name={chat.title} />
      <ListItemText primary={chat.title} secondary="2 months ago" />
    </ListItem>
  );
};

export default ChatListItem;
