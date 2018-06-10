import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import Search from './Search';
import ChatList from './ChatList';
import BottomNav from './BottomNav';
import AddButton from './AddButton';
import Popup from './Popup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

const styles = theme => ({
  sidebar: {
    position: 'relative',
    width: 320,
  },
});

class Sidebar extends React.Component {
  state = {
    open: false,
    title: {
      value: '',
      isValid: true,
    },
    searchValue: '',
    activeTab: 0,
  };

  handleToggleModal = () => {
    this.setState({ open: !this.state.open });
  };
  handleChangeInput = event => {
    this.setState({
      title: {
        value: event.target.value,
        isValid: true,
      },
    });
  };
  handleClickCreate = event => {
    event.preventDefault();
    const { title } = this.state;

    if (!title.value) {
      this.setState({
        title: {
          value: title.value,
          isValid: false,
        },
      });
      return;
    }

    this.props.createChat(title.value);
    this.handleToggleModal();
    this.setState({
      title: {
        value: '',
        isValid: true,
      },
    });
  };

  handleSearchChange = event => {
    this.setState({
      searchValue: event.target.value,
    });
  };
  filterChats = chats => {
    const { searchValue } = this.state;

    return chats
      .filter(chat =>
        chat.title.toLowerCase().includes(searchValue.toLowerCase()),
      )
      .sort(
        (one, two) =>
          one.title.toLowerCase() <= two.title.toLowerCase() ? -1 : 1,
      );
  };
  handleTabChange = (event, activeTab) => {
    this.setState({ activeTab });
  };
  render() {
    const { classes, chats, isConnected } = this.props;
    const { open, title, searchValue, activeTab } = this.state;

    return (
      <Drawer
        variant="permanent"
        classes={{
          paper: classes.sidebar,
        }}
      >
        <Search value={searchValue} searchAction={this.handleSearchChange} />
        <Divider />
        <ChatList
          disabled={!isConnected}
          chats={this.filterChats(activeTab === 0 ? chats.my : chats.all)}
          activeChat={chats.active}
        />
        <AddButton disabled={!isConnected} btnAction={this.handleToggleModal} />
        <Popup
          handleToggleModal={this.handleToggleModal}
          isOpen={open}
          popupTitle="Create new chat"
        >
          <DialogContent>
            <TextField
              required
              autoFocus
              margin="dense"
              placeholder="Type chat title..."
              name="title"
              type="text"
              value={title.value}
              onChange={this.handleChangeInput}
              error={!title.isValid}
              label="New chat"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClickCreate} color="primary">
              Create
            </Button>
          </DialogActions>
        </Popup>
        <BottomNav activeTab={activeTab} tabAction={this.handleTabChange} />
      </Drawer>
    );
  }
}
export default withStyles(styles)(Sidebar);
