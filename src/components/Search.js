import React from 'react';
import { withStyles } from 'material-ui/styles';
import Input from 'material-ui/Input';

const styles = theme => ({
  searchInputWrap: {
    ...theme.mixins.toolbar,
    padding: `0 ${theme.spacing.unit * 3}px`,
    display: `flex`,
    alignItems: `center`,
  },
  searchInput: {
    width: `100%`,
  },
});

const Search = ({ classes }) => (
  <div className={classes.searchInputWrap}>
    <Input
      placeholder="Search chats..."
      className={classes.searchInput}
      inputProps={{
        'aria-label': 'Description',
      }}
    />
  </div>
);

export default withStyles(styles)(Search);
