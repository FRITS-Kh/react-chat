/* eslint no-underscore-dangle: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MoreVert from '@material-ui/icons/MoreVert';
import Typography from '@material-ui/core/Typography';
import MenuButton from './MenuButton';
import Avatar from './Avatar';
import UserMenu from './UserMenu';

const styles = theme => ({
  appBar: {
    width: 'calc(100% - 320px)',
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
  leftBar,
  logoutBtn,
  activeUser,
  activeChat,
  leaveChat,
  deleteChat,
  editUser,
  isConnected,
}) => (
  <AppBar position={position} className={leftBar && classes.appBar}>
    <Toolbar>
      {activeChat && <Avatar name={activeChat.title} colorFrom={activeChat._id} />}
      <Typography className={leftBar && classes.title} variant="title" color="inherit" noWrap>
        {activeChat ? activeChat.title : title}
        {activeUser.isChatMember && (
          <MenuButton
            disabled={!isConnected}
            icon={<MoreVert />}
            menuList={[
              activeUser.isMember && {
                id: activeChat._id,
                menuItem: 'Leave',
                action: () => leaveChat(activeChat._id),
              },
              activeUser.isCreator && {
                id: activeChat._id,
                menuItem: 'Delete',
                action: () => deleteChat(activeChat._id),
              },
            ]}
          />
        )}
      </Typography>
      {activeUser && (
        <UserMenu
          disabled={!isConnected}
          activeUser={activeUser}
          editUser={editUser}
          logoutBtn={logoutBtn}
        />
      )}
    </Toolbar>
  </AppBar>
);

Header.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  position: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  leftBar: PropTypes.bool.isRequired,
  logoutBtn: PropTypes.func.isRequired,
  activeUser: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    username: PropTypes.string,
    isMember: PropTypes.bool.isRequired,
    isCreator: PropTypes.bool.isRequired,
    isChatMember: PropTypes.bool.isRequired,
  }).isRequired,
  activeChat: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }),
  leaveChat: PropTypes.func.isRequired,
  deleteChat: PropTypes.func.isRequired,
  editUser: PropTypes.func.isRequired,
  isConnected: PropTypes.bool.isRequired,
};

Header.defaultProps = {
  activeChat: null,
};
export default withStyles(styles)(Header);
