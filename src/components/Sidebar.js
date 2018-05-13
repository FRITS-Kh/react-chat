import React from 'react';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import Input from 'material-ui/Input';
import Avatar from 'material-ui/Avatar';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Button from 'material-ui/Button';
import AddIcon from '@material-ui/icons/Add';
import BottomNavigation, {
  BottomNavigationAction,
} from 'material-ui/BottomNavigation';
import RestoreIcon from '@material-ui/icons/Restore';
import ExploreIcon from '@material-ui/icons/Explore';

import titleInitials from '../utils/title-initials';

const styles = theme => ({
  drawerPaper: {
    position: 'relative',
    width: 320,
  },
  toolbar: theme.mixins.toolbar,
  searchInputWrap: {
    padding: `0 ${theme.spacing.unit * 3}px`,
    display: `flex`,
    alignItems: `center`,
  },
  input: {
    width: `100%`,
  },
  list: {
    height: `calc(100% - 56px)`,
    overflowY: `auto`,
  },
  button: {
    position: 'absolute',
    bottom: theme.spacing.unit * 3 + 48,
    right: theme.spacing.unit * 3,
  },
});

class Sidebar extends React.Component {
  state = {
    value: 0,
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes, chats } = this.props;
    const { value } = this.state;
    return (
      <Drawer
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classNames(classes.toolbar, classes.searchInputWrap)}>
          <Input
            placeholder="Search chats..."
            className={classes.input}
            inputProps={{
              'aria-label': 'Description',
            }}
          />
        </div>
        <Divider />
        <List className={classes.list}>
          {chats.map((chat, index) => (
            <ListItem key={index} button>
              <Avatar>{titleInitials(chat.title)}</Avatar>
              <ListItemText primary={chat.title} secondary="2 months ago" />
            </ListItem>
          ))}
        </List>
        <Button
          variant="fab"
          color="primary"
          aria-label="add"
          className={classes.button}
        >
          <AddIcon />
        </Button>
        <BottomNavigation value={value} onChange={this.handleChange} showLabels>
          <BottomNavigationAction label="My Chats" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Explore" icon={<ExploreIcon />} />
        </BottomNavigation>
      </Drawer>
    );
  }
}

export default withStyles(styles)(Sidebar);
