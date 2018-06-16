import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Search from './Search';
import ChatList from './ChatList';
import BottomNav from './BottomNav';
import AddButton from './AddButton';
import Popup from './Popup';

const styles = () => ({
  sidebar: {
    position: 'relative',
    width: 320,
  },
});

class Sidebar extends React.Component {
  static propTypes = {
    createChat: PropTypes.func.isRequired,
    classes: PropTypes.objectOf(PropTypes.string).isRequired,
    chats: PropTypes.shape({
      active: PropTypes.object,
      my: PropTypes.array.isRequired,
      all: PropTypes.array.isRequired,
    }).isRequired,
    isConnected: PropTypes.bool.isRequired,
  };

  state = {
    open: false,
    title: {
      value: '',
      isValid: true,
    },
    searchValue: '',
    activeTab: 0,
  };

  getChats = () => {
    const { chats } = this.props;
    const { activeTab, searchValue } = this.state;
    return this.filterAndSortChats(activeTab === 0 ? chats.my : chats.all, searchValue);
  };

  filterAndSortChats = (chats, filter) => {
    const sortFn = (a, b) =>
      ((a.title || '').toLowerCase() <= (b.title || '').toLowerCase() ? -1 : 1);
    const chatsSort = chats.sort(sortFn);
    if (!filter) {
      return chatsSort;
    }
    return chatsSort.filter(({ title = '' }) => title.toLowerCase().includes(filter.toLowerCase()));
  };

  handleToggleModal = () => {
    this.setState({ open: !this.state.open });
  };
  handleChangeInput = (event) => {
    this.setState({
      title: {
        value: event.target.value,
        isValid: true,
      },
    });
  };
  handleClickCreate = (event) => {
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

  handleSearchChange = (event) => {
    this.setState({
      searchValue: event.target.value,
    });
  };

  handleTabChange = (event, activeTab) => {
    this.setState({ activeTab });
  };
  render() {
    const { classes, chats, isConnected } = this.props;
    const {
      open, title, searchValue, activeTab,
    } = this.state;
    const chatsData = this.getChats();

    return (
      <Drawer
        variant="permanent"
        classes={{
          paper: classes.sidebar,
        }}
      >
        <Search value={searchValue} searchAction={this.handleSearchChange} />
        <Divider />
        <ChatList disabled={!isConnected} chats={chatsData} activeChat={chats.active} />
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
