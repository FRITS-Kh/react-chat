import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';

const styles = theme => ({
  searchInputWrap: {
    ...theme.mixins.toolbar,
    padding: `0 ${theme.spacing.unit * 3}px`,
    display: 'flex',
    alignItems: 'center',
  },
  searchInput: {
    width: '100%',
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

Search.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  searchAction: PropTypes.func.isRequired,
};

export default withStyles(styles)(Search);
