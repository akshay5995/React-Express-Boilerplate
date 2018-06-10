import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './stores';
import WelcomeContainer from './containers/WelcomeContainer';

const initialStoreState = {};
const store = configureStore(initialStoreState, {});

require('./styles/app.scss');

const App = () => {
  return (
    <Provider store={store}>
      <WelcomeContainer />
    </Provider>
  );
};

export default App;
