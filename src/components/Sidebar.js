import React from 'react';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import Search from './Search';
import ChatList from './ChatList';
import BottomNav from './BottomNav';
import AddButton from './AddButton';

const styles = theme => ({
  sidebar: {
    position: 'relative',
    width: 320,
  },
});

const Sidebar = ({ classes, chats }) => (
  <Drawer
    variant="permanent"
    classes={{
      paper: classes.sidebar,
    }}
  >
    <Search />
    <Divider />
    <ChatList chats={chats} />
    <AddButton />
    <BottomNav />
  </Drawer>
);

export default withStyles(styles)(Sidebar);
