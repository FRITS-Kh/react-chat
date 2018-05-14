import React from 'react';
import Avatar from 'material-ui/Avatar';
import titleInitials from '../utils/title-initials';

const UserAvatar = ({ name }) => {
  return <Avatar>{titleInitials(name)}</Avatar>;
};

export default UserAvatar;
