import React from 'react';
import { withStyles } from 'material-ui/styles';
import Avatar from 'material-ui/Avatar';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreVert from '@material-ui/icons/MoreVert';
import Menu, { MenuItem } from 'material-ui/Menu';
import Typography from 'material-ui/Typography';

const styles = theme => ({
  appBar: {
    width: `calc(100% - 320px)`,
  },
  title: {
    flex: 1,
    margin: `0 ${theme.spacing.unit * 3}px`,
  },
  moreBtn: {
    '&:hover': {
      background: `none`,
    },
  },
});

class ChatHeader extends React.Component {
  state = {
    anchorEl: null,
    anchorElMore: null,
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
    const { anchorEl, anchorElMore } = this.state;
    const open = Boolean(anchorEl);
    const openMore = Boolean(anchorElMore);

    return (
      <AppBar position="absolute" className={classes.appBar}>
        <Toolbar>
          <Avatar>H</Avatar>
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
    );
  }
}
export default withStyles(styles)(ChatHeader);
