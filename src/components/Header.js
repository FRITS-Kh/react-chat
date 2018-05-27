import React from 'react';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import MoreVert from '@material-ui/icons/MoreVert';
import Typography from 'material-ui/Typography';
import MenuButton from './MenuButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Avatar from './Avatar';

const styles = theme => ({
  appBar: {
    width: `calc(100% - 320px)`,
  },
  title: {
    flex: 1,
    margin: `0 ${theme.spacing.unit * 3}px`,
  },
});

const Header = ({
  classes,
  position,
  title,
  avatarName,
  profileMenu,
  titleMenu,
  leftBar,
  logoutBtn,
}) => (
  <AppBar position={position} className={leftBar && classes.appBar}>
    <Toolbar>
      {avatarName && <Avatar name={avatarName} />}
      <Typography
        className={leftBar && classes.title}
        variant="title"
        color="inherit"
        noWrap
      >
        {title}
        {titleMenu && (
          <MenuButton icon={<MoreVert />} menuList={[{ menuItem: 'Leave' }]} />
        )}
      </Typography>
      {profileMenu && (
        <MenuButton
          icon={<AccountCircle />}
          menuList={[
            { menuItem: 'Edit Profile' },
            { menuItem: 'Logout', action: logoutBtn },
          ]}
        />
      )}
    </Toolbar>
  </AppBar>
);
export default withStyles(styles)(Header);
