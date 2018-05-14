import React from 'react';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';
import Message from './Message';
import MessageInput from './MessageInput';
import UserAvatar from './UserAvatar';

const styles = theme => ({
  content: {
    display: 'flex',
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: `64px 0 90px`,
    overflow: `hidden`,
  },
  contentList: {
    overflowY: `auto`,
    width: '100%',
    paddingTop: theme.spacing.unit * 3,
  },
  contentListItem: {
    display: 'flex',
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 3}px`,
    alignItems: `center`,
  },
  contentListItemUser: {
    flexDirection: `row-reverse`,
  },
});
class Chat extends React.Component {
  componentDidMount() {
    this.scrollDownHistory();
  }
  componentDidUpdate() {
    this.scrollDownHistory();
  }
  scrollDownHistory() {
    const messagesWraper = this.refs.contentList;
    if (messagesWraper) {
      messagesWraper.scrollTop = messagesWraper.scrollHeight;
    }
  }

  render() {
    const { classes, messages } = this.props;
    return (
      <main className={classes.content}>
        <div className={classes.contentList} ref="contentList">
          {messages &&
            messages.map((message, index) => {
              const isMessageFromMe = message.sender === 'me';
              return (
                <div
                  key={index}
                  className={classNames(
                    classes.contentListItem,
                    isMessageFromMe && classes.contentListItemUser,
                  )}
                >
                  <UserAvatar name={message.sender} />
                  <Message
                    message={message}
                    isMessageFromMe={isMessageFromMe}
                  />
                </div>
              );
            })}
        </div>
        <MessageInput />
      </main>
    );
  }
}

export default withStyles(styles)(Chat);
