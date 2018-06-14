import React from 'react';
import PropTypes from 'prop-types';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import RestoreIcon from '@material-ui/icons/Restore';
import ExploreIcon from '@material-ui/icons/Explore';

const BottomNav = ({ activeTab, tabAction }) => (
  <BottomNavigation value={activeTab} onChange={tabAction} showLabels>
    <BottomNavigationAction label="My Chats" icon={<RestoreIcon />} />
    <BottomNavigationAction label="Explore" icon={<ExploreIcon />} />
  </BottomNavigation>
);

BottomNav.propTypes = {
  activeTab: PropTypes.number.isRequired,
  tabAction: PropTypes.func.isRequired,
};

export default BottomNav;
