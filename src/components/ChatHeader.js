import React from 'react';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import MoreVert from '@material-ui/icons/MoreVert';
import Typography from 'material-ui/Typography';
import MenuButton from './MenuButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import UserAvatar from './UserAvatar';

const styles = theme => ({
  appBar: {
    width: `calc(100% - 320px)`,
  },
  title: {
    flex: 1,
    margin: `0 ${theme.spacing.unit * 3}px`,
  },
});

const ChatHeader = ({ classes }) => {
  return (
    <AppBar position="absolute" className={classes.appBar}>
      <Toolbar>
        <UserAvatar name="H" />
        <Typography
          className={classes.title}
          variant="title"
          color="inherit"
          noWrap
        >
          DogeCodes React Chat
          <MenuButton icon={<MoreVert />} menuList={[{ menuItem: 'Leave' }]} />
        </Typography>
        <MenuButton
          icon={<AccountCircle />}
          menuList={[{ menuItem: 'Edit Profile' }, { menuItem: 'Logout' }]}
        />
      </Toolbar>
    </AppBar>
  );
};
export default withStyles(styles)(ChatHeader);
