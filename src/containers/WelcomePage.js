import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { signup, login, receiveAuth } from '../actions/auth';
import WelcomePage from '../components/WelcomePage';

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      signup,
      login,
      receiveAuth,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(WelcomePage);
