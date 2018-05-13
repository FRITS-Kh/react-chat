import React from 'react';
import { withStyles } from 'material-ui/styles';

import ChatHeader from './components/ChatHeader';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';

import { chats, messages } from './mock-data';

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

const PermanentDrawer = ({ classes }) => {
  return (
    <div className={classes.root}>
      <ChatHeader />
      <Sidebar chats={chats} />
      <Chat messages={messages} />
    </div>
  );
};

export default withStyles(styles)(PermanentDrawer);
