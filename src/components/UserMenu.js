import React from 'react';
import MenuButton from './MenuButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Popup from './Popup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

class UserMenu extends React.Component {
  state = {
    open: false,
    username: '',
    firstName: '',
    lastName: '',
  };
  componentWillReceiveProps(nextProps) {
    this.setState({
      username: nextProps.activeUser.username,
      firstName: nextProps.activeUser.firstName,
      lastName: nextProps.activeUser.lastName,
    });
  }
  handleToggleModal = () => {
    this.setState({ open: !this.state.open });
  };
  handleChangeInput = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  handleSaveClick = () => {
    this.props.editUser({
      username: this.state.username,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
    });
    this.handleToggleModal();
  };
  render() {
    const { logoutBtn } = this.props;
    const { open } = this.state;

    return (
      <React.Fragment>
        <MenuButton
          icon={<AccountCircle />}
          menuList={[
            {
              id: 'Edit Profile',
              menuItem: 'Edit Profile',
              action: this.handleToggleModal,
            },
            { id: 'Logout', menuItem: 'Logout', action: logoutBtn },
          ]}
          rulesForCloseModal={open}
        />
        <Popup
          handleToggleModal={this.handleToggleModal}
          isOpen={open}
          popupTitle="Edit profile"
        >
          <DialogContent>
            <TextField
              required
              autoFocus
              margin="dense"
              placeholder="Enter you username..."
              name="username"
              type="text"
              value={this.state.username}
              onChange={this.handleChangeInput}
              label="Username"
              fullWidth
            />
            <TextField
              fullWidth
              name="firstName"
              label="First name"
              placeholder="Enter you first name..."
              type="text"
              margin="normal"
              value={this.state.firstName}
              onChange={this.handleChangeInput}
            />
            <TextField
              fullWidth
              name="lastName"
              label="Last name"
              placeholder="Enter you last name..."
              type="text"
              margin="normal"
              value={this.state.lastName}
              onChange={this.handleChangeInput}
            />
          </DialogContent>
          <DialogActions>
            <Button color="primary" onClick={this.handleSaveClick}>
              Save
            </Button>
            <Button onClick={this.handleToggleModal}>Close</Button>
          </DialogActions>
        </Popup>
      </React.Fragment>
    );
  }
}
export default UserMenu;
