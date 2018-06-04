import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';

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

const Search = ({ classes, searchAction }) => (
  <div className={classes.searchInputWrap}>
    <Input
      placeholder="Search chats..."
      className={classes.searchInput}
      inputProps={{
        'aria-label': 'Description',
      }}
      onChange={searchAction}
    />
  </div>
);

export default withStyles(styles)(Search);
