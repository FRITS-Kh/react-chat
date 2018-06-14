import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { receiveAuth } from '../actions/auth';

class PrivateRoute extends React.Component {
  static propTypes = {
    receiveAuth: PropTypes.func.isRequired,
    component: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
  };

  componentDidMount() {
    this.props.receiveAuth();
  }

  render() {
    const { component: Component, isAuthenticated, ...rest } = this.props;

    return (
      <Route
        {...rest}
        render={props =>
          (isAuthenticated ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: '/welcome',
                state: { from: props.location },
              }}
            />
          ))
        }
      />
    );
  }
}
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      receiveAuth,
    },
    dispatch,
  );
export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(PrivateRoute));
