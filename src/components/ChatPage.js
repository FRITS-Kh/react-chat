import React from 'react';
import { withStyles } from 'material-ui/styles';

import Header from './Header';
import Sidebar from './Sidebar';
import Chat from './Chat';

import { messages } from '../mock-data';

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

class ChatPage extends React.Component {
  componentDidMount() {
    const { fetchAllChats, fetchMyChats } = this.props;

    Promise.all([fetchAllChats(), fetchMyChats()]);
  }

  render() {
    const { classes, logout, chats } = this.props;
    return (
      <div className={classes.root}>
        <Header
          position="absolute"
          title="DogeCodes React Chat"
          avatarName="H"
          titleMenu={true}
          profileMenu={true}
          leftBar={true}
          logoutBtn={logout}
        />
        <Sidebar chats={chats} />
        <Chat messages={messages} />
      </div>
    );
  }
}

export default withStyles(styles)(ChatPage);
