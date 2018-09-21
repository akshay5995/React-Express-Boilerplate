import { connect } from 'react-redux';
import View from '../components/View';
import { fetchMessgae } from '../actions/WelcomeActions';

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

const ViewContainer = connect(mapStateToProps, mapDispatchToProps)(View);

export default ViewContainer;
