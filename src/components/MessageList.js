import React from 'react';
import { withStyles } from 'material-ui/styles';
import Message from './Message';

const styles = theme => ({
  messageList: {
    overflowY: `auto`,
    width: '100%',
    paddingTop: theme.spacing.unit * 3,
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
    const { classes, messages } = this.props;
    return (
      <div className={classes.messageList} ref={this.chatHistoryRef}>
        {messages &&
          messages.map((message, index) => (
            <Message key={index} {...message} />
          ))}
      </div>
    );
  }
}

export default withStyles(styles)(MessageList);
