import React from 'react';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import List from 'material-ui/List';
import Search from './Search';
import BottomNav from './BottomNav';
import AddButton from './AddButton';
import ChatListItem from './ChatListItem';

const styles = theme => ({
  drawerPaper: {
    position: 'relative',
    width: 320,
  },
  list: {
    height: `calc(100% - 56px)`,
    overflowY: `auto`,
  },
});

const Sidebar = ({ classes, chats }) => {
  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <Search />
      <Divider />
      <List className={classes.list}>
        {chats.map((chat, index) => <ChatListItem chat={chat} index={index} />)}
      </List>
      <AddButton />
      <BottomNav />
    </Drawer>
  );
};

export default withStyles(styles)(Sidebar);
