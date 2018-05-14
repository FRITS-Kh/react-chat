import React from 'react';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import AddIcon from '@material-ui/icons/Add';

const styles = theme => ({
  button: {
    position: 'absolute',
    bottom: theme.spacing.unit * 3 + 48,
    right: theme.spacing.unit * 3,
  },
});

const PermanentDrawer = ({ classes }) => {
  return (
    <Button
      variant="fab"
      color="primary"
      aria-label="add"
      className={classes.button}
    >
      <AddIcon />
    </Button>
  );
};

export default withStyles(styles)(PermanentDrawer);
