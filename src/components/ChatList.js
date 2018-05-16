import React from 'react';
import { withStyles } from 'material-ui/styles';
import List from 'material-ui/List';
import ChatListItem from './ChatListItem';

const styles = theme => ({
  chatList: {
    height: `calc(100% - 56px)`,
    overflowY: `auto`,
  },
});

const ChatList = ({ classes, chats }) => (
  <List className={classes.chatList}>
    {chats &&
      chats.map((chat, index) => <ChatListItem key={index} {...chat} />)}
  </List>
);

export default withStyles(styles)(ChatList);
