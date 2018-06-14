import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const styles = theme => ({
  addButton: {
    position: 'absolute',
    bottom: theme.spacing.unit * 3 + 48,
    right: theme.spacing.unit * 3,
  },
});

const AddButton = ({ classes, btnAction, disabled }) => (
  <Button
    disabled={disabled}
    variant="fab"
    color="primary"
    aria-label="add"
    className={classes.addButton}
    onClick={btnAction}
  >
    <AddIcon />
  </Button>
);

AddButton.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  btnAction: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default withStyles(styles)(AddButton);
