import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import Header from './Header';
import Sidebar from './Sidebar';
import Chat from './Chat';

import ErrorMessage from './ErrorMessage';

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
    const {
      match,
      fetchAllChats,
      fetchMyChats,
      setActiveChat,
      socketsConnect,
      mountChat,
    } = this.props;

    Promise.all([fetchAllChats(), fetchMyChats()])
      .then(() => {
        socketsConnect();
      })
      .then(() => {
        const { chatId } = match.params;
        // If we pass a chatId, then fetch messages from chat
        if (chatId) {
          setActiveChat(chatId);
          mountChat(chatId);
        }
      });
  }

  componentWillReceiveProps(nextProps) {
    const {
      match: { params },
      setActiveChat,
      mountChat,
      unmountChat,
    } = this.props;
    const { params: nextParams } = nextProps.match;

    // If we change route, then fetch messages from chat by chatID
    if (nextParams.chatId && params.chatId !== nextParams.chatId) {
      setActiveChat(nextParams.chatId);
      unmountChat(params.chatId);
      mountChat(nextParams.chatId);
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
      error,
      isConnected,
    } = this.props;
    return (
      <div className={classes.root}>
        <Header
          isConnected={isConnected}
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
        <Sidebar
          isConnected={isConnected}
          chats={chats}
          createChat={createChat}
        />
        <Chat
          isConnected={isConnected}
          messages={messages}
          activeChat={chats.active}
          activeUser={activeUser}
          sendMessage={sendMessage}
          joinChat={joinChat}
        />
        <ErrorMessage error={error} />
      </div>
    );
  }
}

export default withStyles(styles)(ChatPage);
