import React from 'react';
import { withStyles } from 'material-ui/styles';
import MessageList from './MessageList';
import MessageInput from './MessageInput';

const styles = theme => ({
  content: {
    display: 'flex',
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: `64px 0 90px`,
    overflow: `hidden`,
  },
});
const Chat = ({ classes, messages }) => (
  <main className={classes.content}>
    <MessageList messages={messages} />
    <MessageInput />
  </main>
);

export default withStyles(styles)(Chat);
