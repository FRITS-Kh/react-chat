import React from 'react';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Message from './Message';

const styles = theme => ({
  messageList: {
    overflowY: `auto`,
    width: '100%',
    height: `calc(100% - ${theme.spacing.unit * 3}px)`,
    paddingTop: theme.spacing.unit * 3,
  },
  paper: {
    padding: theme.spacing.unit * 3,
  },
});
class MessageList extends React.Component {
  constructor(props) {
    super(props);
    this.chatHistoryRef = React.createRef();
  }
  componentDidMount() {
    this.scrollDownHistory();
  }
  componentDidUpdate() {
    this.scrollDownHistory();
  }
  scrollDownHistory() {
    const messagesWraper = this.chatHistoryRef.current;
    if (messagesWraper) {
      messagesWraper.scrollTop = messagesWraper.scrollHeight;
    }
  }

  render() {
    const { classes, messages, match, activeUser } = this.props;
    // If there's no active chat, then show a tip
    if (!match.params.chatId) {
      return (
        <Paper className={classes.paper}>
          <Typography variant="display1" gutterBottom>
            Start messaging…
          </Typography>
          <Typography variant="body1" gutterBottom>
            Use <strong>Global</strong> to explore communities around here.
          </Typography>
          <Typography variant="body1" gutterBottom>
            Use <strong>Recents</strong> to see your recent conversations.
          </Typography>
        </Paper>
      );
    }
    return messages && messages.length ? (
      <div className={classes.messageList} ref={this.chatHistoryRef}>
        {messages.map((message, index) => (
          <Message key={index} activeUser={activeUser} {...message} />
        ))}
      </div>
    ) : (
      <Typography variant="display1">There is no messages yet...</Typography>
    );
  }
}

export default withRouter(withStyles(styles)(MessageList));
