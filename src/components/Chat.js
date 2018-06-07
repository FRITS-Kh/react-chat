import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import MessageList from './MessageList';
import MessageInput from './MessageInput';

const styles = theme => ({
  content: {
    display: 'flex',
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: `64px 0 90px`,
    overflow: `hidden`,
    alignItems: `center`,
    justifyContent: `center`,
  },
});
const Chat = ({
  classes,
  messages,
  activeChat,
  activeUser,
  joinChat,
  sendMessage,
}) => (
  <main className={classes.content}>
    <MessageList messages={messages} activeUser={activeUser} />
    {activeChat && (
      <MessageInput
        sendMessage={sendMessage}
        showJoinButton={!activeUser.isChatMember}
        onJoinButtonClick={() => joinChat(activeChat._id)}
        activeUser={activeUser}
      />
    )}
  </main>
);

export default withRouter(withStyles(styles)(Chat));
