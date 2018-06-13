import React from 'react';
import MUIAvatar from '@material-ui/core/Avatar';
import titleInitials from '../utils/title-initials';
import getColor from '../utils/color-from';

const Avatar = ({ name, colorFrom, rest }) => (
  <MUIAvatar style={{ backgroundColor: getColor(colorFrom || name) }} {...rest}>
    {titleInitials(name)}
  </MUIAvatar>
);

export default Avatar;
