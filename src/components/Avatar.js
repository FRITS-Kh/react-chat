import React from 'react';
import MUIAvatar from 'material-ui/Avatar';
import titleInitials from '../utils/title-initials';

const Avatar = ({ name }) => <MUIAvatar>{titleInitials(name)}</MUIAvatar>;

export default Avatar;
