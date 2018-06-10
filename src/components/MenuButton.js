import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import { Menu, MenuItem } from '@material-ui/core';

class MenuButton extends React.Component {
  state = {
    anchorEl: null,
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };
  handleClose = () => {
    this.setState({ anchorEl: null });
  };
  handleCustomClick = e => {
    this.handleClose();
    return e();
  };

  render() {
    const { menuList, icon, disabled } = this.props;
    const { anchorEl } = this.state;
    const open = this.props.rulesForCloseModal ? false : Boolean(anchorEl);
    return (
      <React.Fragment>
        <IconButton
          disabled={disabled}
          aria-owns={open ? 'menu-appbar' : null}
          aria-haspopup="true"
          onClick={this.handleMenu}
          color="inherit"
        >
          {icon}
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
          {menuList.map(menuItem => {
            return menuItem !== false ? (
              <MenuItem
                key={menuItem.id}
                onClick={
                  menuItem.action
                    ? () => this.handleCustomClick(menuItem.action)
                    : this.handleClose
                }
              >
                {menuItem.menuItem}
              </MenuItem>
            ) : null;
          })}
        </Menu>
      </React.Fragment>
    );
  }
}
export default MenuButton;
