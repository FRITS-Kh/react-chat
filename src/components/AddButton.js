import React from 'react';
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

const AddButton = ({ classes, btnAction }) => (
  <Button
    variant="fab"
    color="primary"
    aria-label="add"
    className={classes.addButton}
    onClick={btnAction}
  >
    <AddIcon />
  </Button>
);

export default withStyles(styles)(AddButton);
