import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import Header from './Header';
import Sidebar from './Sidebar';
import Chat from './Chat';

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
    const { match, fetchAllChats, fetchMyChats, setActiveChat } = this.props;

    Promise.all([fetchAllChats(), fetchMyChats()]).then(() => {
      // If we pass a chatId, then fetch messages from chat
      if (match.params.chatId) {
        setActiveChat(match.params.chatId);
      }
    });
  }

  componentWillReceiveProps(nextProps) {
    const {
      match: { params },
      setActiveChat,
    } = this.props;
    const { params: nextParams } = nextProps.match;

    // If we change route, then fetch messages from chat by chatID
    if (nextParams.chatId && params.chatId !== nextParams.chatId) {
      setActiveChat(nextParams.chatId);
    }
  }

  handleLeaveClick = () => {
    this.handleClose();
    this.props.onLeaveClick();
  };

  handleDeleteClick = () => {
    this.handleClose();
    this.props.onDeleteClick();
  };

  render() {
    const {
      classes,
      logout,
      chats,
      createChat,
      activeUser,
      joinChat,
      leaveChat,
      deleteChat,
      sendMessage,
      messages,
      editUser,
    } = this.props;
    return (
      <div className={classes.root}>
        <Header
          position="absolute"
          title="DogeCodes React Chat"
          leftBar={true}
          logoutBtn={logout}
          activeUser={activeUser}
          activeChat={chats.active}
          leaveChat={leaveChat}
          deleteChat={deleteChat}
          editUser={editUser}
        />
        <Sidebar chats={chats} createChat={createChat} />
        <Chat
          messages={messages}
          activeChat={chats.active}
          activeUser={activeUser}
          sendMessage={sendMessage}
          joinChat={joinChat}
        />
      </div>
    );
  }
}

export default withStyles(styles)(ChatPage);
