import { connect } from 'react-redux';
import Welcome from '../components/Welcome';
import { fetchMessgae } from '../actions/welcomeAction';

const mapStateToProps = (state) => {
  return {
    message: state.welcomeReducer.message,
    error: state.welcomeReducer.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMessage: () => dispatch(fetchMessgae()),
  };
};

const WelcomeContainer = connect(mapStateToProps, mapDispatchToProps)(Welcome);

export default WelcomeContainer;
