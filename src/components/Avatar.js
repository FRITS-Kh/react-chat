import React from 'react';
import MUIAvatar from 'material-ui/Avatar';
import titleInitials from '../utils/title-initials';
import getColor from '../utils/color-from';

const Avatar = ({ name }) => (
  <MUIAvatar style={{ backgroundColor: getColor(name) }}>
    {titleInitials(name)}
  </MUIAvatar>
);

export default Avatar;
