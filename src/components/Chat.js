import React from 'react';
import { withStyles } from 'material-ui/styles';
import { deepPurple } from 'material-ui/colors';
import classNames from 'classnames';
import Avatar from 'material-ui/Avatar';
import Typography from 'material-ui/Typography';
import Input from 'material-ui/Input';
import Paper from 'material-ui/Paper';

import titleInitials from '../utils/title-initials';

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
  contentListInfo: {
    textAlign: `center`,
    width: '100%',
  },
  inlineEl: {
    display: 'inline',
  },
  textMessage: {
    padding: theme.spacing.unit,
    marginLeft: theme.spacing.unit * 2,
    minWidth: `10%`,
    maxWidth: `70%`,
  },
  textMessageUser: {
    backgroundColor: deepPurple[50],
    marginRight: theme.spacing.unit * 2,
  },
  textMessageInput: {
    position: 'fixed',
    right: theme.spacing.unit * 3,
    bottom: theme.spacing.unit * 3,
    left: 344,
    padding: theme.spacing.unit * 2,
  },
  input: {
    width: `100%`,
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
                  <Avatar>{titleInitials(message.sender)}</Avatar>
                  <Paper
                    className={classNames(
                      classes.textMessage,
                      isMessageFromMe && classes.textMessageUser,
                    )}
                  >
                    <Typography variant="caption">{message.sender}</Typography>
                    <Typography variant="body1">{message.content}</Typography>
                  </Paper>
                </div>
              );
            })}
        </div>
        <Paper className={classes.textMessageInput} elevation={6}>
          <Input
            placeholder="Type your message…"
            className={classes.input}
            inputProps={{
              'aria-label': 'Description',
            }}
          />
        </Paper>
      </main>
    );
  }
}

export default withStyles(styles)(Chat);
