import React from 'react';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';
import Input from 'material-ui/Input';

const styles = theme => ({
  toolbar: theme.mixins.toolbar,
  searchInputWrap: {
    padding: `0 ${theme.spacing.unit * 3}px`,
    display: `flex`,
    alignItems: `center`,
  },
  input: {
    width: `100%`,
  },
});

const Search = ({ classes }) => {
  return (
    <div className={classNames(classes.toolbar, classes.searchInputWrap)}>
      <Input
        placeholder="Search chats..."
        className={classes.input}
        inputProps={{
          'aria-label': 'Description',
        }}
      />
    </div>
  );
};

export default withStyles(styles)(Search);
