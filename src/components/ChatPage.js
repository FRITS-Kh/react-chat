import React from 'react';
import { withStyles } from 'material-ui/styles';

import ChatHeader from './ChatHeader';
import Sidebar from './Sidebar';
import Chat from './Chat';

import { chats, messages } from '../mock-data';

const styles = theme => ({
  root: {
    height: `100vh`,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
  },
});

const ChatPage = ({ classes }) => (
  <div className={classes.root}>
    <ChatHeader />
    <Sidebar chats={chats} />
    <Chat messages={messages} />
  </div>
);

export default withStyles(styles)(ChatPage);
