import React from 'react';
import classNames from 'classnames';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';

import Input from 'material-ui/Input';

import List, { ListItem, ListItemText } from 'material-ui/List';

import Avatar from 'material-ui/Avatar';
import {
  deepOrange,
  deepPurple,
  blue,
  teal,
  brown,
  red,
} from 'material-ui/colors';

import Button from 'material-ui/Button';
import AddIcon from '@material-ui/icons/Add';

import BottomNavigation, {
  BottomNavigationAction,
} from 'material-ui/BottomNavigation';
import RestoreIcon from '@material-ui/icons/Restore';
import ExploreIcon from '@material-ui/icons/Explore';

import IconButton from 'material-ui/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreVert from '@material-ui/icons/MoreVert';
import Menu, { MenuItem } from 'material-ui/Menu';

import Paper from 'material-ui/Paper';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  appFrame: {
    height: `100vh`,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
  },
  appBar: {
    width: `calc(100% - 320px)`,
  },
  drawerPaper: {
    position: 'relative',
    width: 320,
  },
  toolbar: theme.mixins.toolbar,
  searchInputWrap: {
    padding: `0 24px`,
    display: `flex`,
    alignItems: `center`,
  },
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
    paddingTop: 24,
  },
  contentListItem: {
    display: 'flex',
    padding: `8px 24px`,
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
    padding: 8,
    marginLeft: 16,
    minWidth: `10%`,
    maxWidth: `70%`,
  },
  textMessageUser: {
    backgroundColor: deepPurple[50],
    marginRight: 16,
  },
  textMessageInput: {
    position: 'fixed',
    right: 24,
    bottom: 24,
    left: 344,
    padding: 16,
  },
  input: {
    width: `100%`,
  },
  list: {
    height: `calc(100% - 56px)`,
    overflowY: `auto`,
  },
  listItem: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  button: {
    position: 'absolute',
    bottom: 72,
    right: 24,
  },
  title: {
    flex: 1,
    margin: `0 16px`,
  },
  moreBtn: {
    '&:hover': {
      background: `none`,
    },
  },
  orangeBg: {
    backgroundColor: deepOrange[500],
  },
  purpleBg: {
    backgroundColor: deepPurple[500],
  },
  blueBg: {
    backgroundColor: blue[600],
  },
  tealBg: {
    backgroundColor: teal[400],
  },
  brownBg: {
    backgroundColor: brown[500],
  },
  redBg: {
    backgroundColor: red[700],
  },
  orange: {
    color: deepOrange[500],
  },
  purple: {
    color: deepPurple[500],
  },
  blue: {
    color: blue[600],
  },
  teal: {
    color: teal[400],
  },
  brown: {
    color: brown[500],
  },
  red: {
    color: red[700],
  },
});

class PermanentDrawer extends React.Component {
  state = {
    value: 0,
    anchorEl: null,
    anchorElMore: null,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };
  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };
  handleClose = () => {
    this.setState({ anchorEl: null });
  };
  handleMenuMore = event => {
    this.setState({ anchorElMore: event.currentTarget });
  };
  handleCloseMore = () => {
    this.setState({ anchorElMore: null });
  };

  render() {
    const { classes } = this.props;
    const { value, anchorEl, anchorElMore } = this.state;
    const open = Boolean(anchorEl);
    const openMore = Boolean(anchorElMore);

    return (
      <div className={classes.appFrame}>
        <AppBar position="absolute" className={classes.appBar}>
          <Toolbar>
            <Avatar className={classes.orangeBg}>H</Avatar>
            <Typography
              className={classes.title}
              variant="title"
              color="inherit"
              noWrap
            >
              DogeCodes React Chat
              <IconButton
                className={classes.moreBtn}
                aria-owns={openMore ? 'menu-chat' : null}
                aria-haspopup="true"
                onClick={this.handleMenuMore}
                color="inherit"
              >
                <MoreVert />
              </IconButton>
              <Menu
                id="menu-chat"
                anchorEl={anchorElMore}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={openMore}
                onClose={this.handleCloseMore}
              >
                <MenuItem onClick={this.handleCloseMore}>Leave</MenuItem>
              </Menu>
            </Typography>
            <IconButton
              aria-owns={open ? 'menu-appbar' : null}
              aria-haspopup="true"
              onClick={this.handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={open}
              onClose={this.handleClose}
            >
              <MenuItem onClick={this.handleClose}>Edit Profile</MenuItem>
              <MenuItem onClick={this.handleClose}>Logout</MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>
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
            <ListItem className={classes.listItem} button>
              <Avatar className={classes.purpleBg}>AP</Avatar>
              <ListItemText primary="Avada kedavra" secondary="2 months ago" />
            </ListItem>
            <ListItem className={classes.listItem} button>
              <Avatar className={classes.blueBg}>4</Avatar>
              <ListItemText primary="Work" secondary="a month ago" />
            </ListItem>
            <ListItem className={classes.listItem} button>
              <Avatar className={classes.brownBg}>Y</Avatar>
              <ListItemText primary="Vacation" secondary="3 months ago" />
            </ListItem>
            <ListItem className={classes.listItem} button>
              <Avatar className={classes.tealBg}>EP</Avatar>
              <ListItemText primary="Photos" secondary="3 days ago" />
            </ListItem>
            <ListItem className={classes.listItem} button>
              <Avatar className={classes.redBg}>F</Avatar>
              <ListItemText primary="Work" secondary="15 days ago" />
            </ListItem>
            <ListItem className={classes.listItem} button>
              <Avatar className={classes.blueBg}>T</Avatar>
              <ListItemText primary="Vacation" secondary="8 days ago" />
            </ListItem>
            <ListItem className={classes.listItem} button>
              <Avatar className={classes.purpleBg}>DG</Avatar>
              <ListItemText primary="Photos" secondary="5 months ago" />
            </ListItem>
            <ListItem className={classes.listItem} button>
              <Avatar className={classes.orangeBg}>B</Avatar>
              <ListItemText primary="Work" secondary="2 months ago" />
            </ListItem>
            <ListItem className={classes.listItem} button>
              <Avatar className={classes.tealBg}>33</Avatar>
              <ListItemText primary="Vacation" secondary="a day ago" />
            </ListItem>
          </List>
          <Button
            variant="fab"
            color="primary"
            aria-label="add"
            className={classes.button}
          >
            <AddIcon />
          </Button>
          <BottomNavigation
            value={value}
            onChange={this.handleChange}
            showLabels
          >
            <BottomNavigationAction label="My Chats" icon={<RestoreIcon />} />
            <BottomNavigationAction label="Explore" icon={<ExploreIcon />} />
          </BottomNavigation>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.contentList}>
            <div className={classes.contentListItem}>
              <Avatar className={classes.purpleBg}>U</Avatar>
              <Paper className={classes.textMessage} elevation={2}>
                <Typography
                  className={classNames(classes.inlineEl, classes.purple)}
                  variant="caption"
                  component="span"
                >
                  user
                </Typography>
                <Typography component="p">test</Typography>
                <Typography variant="caption" component="span">
                  16 days ago
                </Typography>
              </Paper>
            </div>
            <div className={classes.contentListItem}>
              <p className={classes.contentListInfo}>
                <Typography
                  className={classNames(classes.inlineEl, classes.orange)}
                  variant="caption"
                  component="span"
                >
                  Alex Paul
                </Typography>
                <Typography className={classes.inlineEl} component="span">
                  {' '}
                  joined
                </Typography>
                <Typography variant="caption" component="span">
                  2 days ago
                </Typography>
              </p>
            </div>
            <div className={classes.contentListItem}>
              <Avatar className={classes.orangeBg}>AP</Avatar>
              <Paper className={classes.textMessage} elevation={2}>
                <Typography
                  className={classNames(classes.inlineEl, classes.orange)}
                  variant="caption"
                  component="span"
                >
                  Alex Paul
                </Typography>
                <Typography component="p">message</Typography>
                <Typography variant="caption" component="span">
                  2 days ago
                </Typography>
              </Paper>
            </div>
            <div
              className={classNames(
                classes.contentListItem,
                classes.contentListItemUser,
              )}
            >
              <Avatar className={classes.purpleBg}>Y</Avatar>
              <Paper
                className={classNames(
                  classes.textMessage,
                  classes.textMessageUser,
                )}
                elevation={2}
              >
                <Typography
                  className={classNames(classes.inlineEl, classes.purple)}
                  variant="caption"
                  component="span"
                >
                  Yuriy
                </Typography>
                <Typography component="p">My message</Typography>
                <Typography variant="caption" component="span">
                  one day ago
                </Typography>
              </Paper>
            </div>
          </div>
          <Paper className={classes.textMessageInput} elevation={5}>
            <Input
              placeholder="Type your message…"
              className={classes.input}
              inputProps={{
                'aria-label': 'Description',
              }}
            />
          </Paper>
        </main>
      </div>
    );
  }
}

export default withStyles(styles)(PermanentDrawer);
