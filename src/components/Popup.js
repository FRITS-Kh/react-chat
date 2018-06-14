import React from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';

const Popup = ({
  handleToggleModal, isOpen, popupTitle, children,
}) => (
  <Dialog open={isOpen} onClose={handleToggleModal} aria-labelledby="form-dialog-title" fullWidth>
    <DialogTitle id="form-dialog-title">{popupTitle}</DialogTitle>
    {children}
  </Dialog>
);

Popup.propTypes = {
  handleToggleModal: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  popupTitle: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default Popup;
