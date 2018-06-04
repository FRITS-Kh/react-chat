import React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import RestoreIcon from '@material-ui/icons/Restore';
import ExploreIcon from '@material-ui/icons/Explore';

const BottomNav = ({ activeTab, tabAction }) => {
  return (
    <BottomNavigation value={activeTab} onChange={tabAction} showLabels>
      <BottomNavigationAction label="My Chats" icon={<RestoreIcon />} />
      <BottomNavigationAction label="Explore" icon={<ExploreIcon />} />
    </BottomNavigation>
  );
};

export default BottomNav;
