import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import ChatListItem from './ChatListItem';

const styles = theme => ({
  chatList: {
    height: `calc(100% - 56px)`,
    overflowY: `auto`,
  },
  emptyChatList: {
    textAlign: 'center',
    position: 'absolute',
    top: '50%',
    left: 0,
    width: '100%',
    transform: 'translateY(-50%)',
  },
});

const ChatList = ({ classes, chats, activeChat, disabled }) => (
  <List className={classes.chatList}>
    {chats && chats.length ? (
      chats.map(chat => (
        <ChatListItem
          disabled={disabled}
          key={chat._id}
          active={activeChat && activeChat._id === chat._id}
          chatId={chat._id}
          {...chat}
        />
      ))
    ) : (
      <Typography variant="subheading" className={classes.emptyChatList}>
        There is no chats yet...
      </Typography>
    )}
  </List>
);

export default withStyles(styles)(ChatList);
