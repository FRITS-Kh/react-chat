import React from 'react';
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

export default Popup;
