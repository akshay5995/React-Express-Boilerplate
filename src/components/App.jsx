import React from 'react';
import PropTypes from 'prop-types';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { MuiThemeProvider } from 'material-ui/styles';

require('../styles/app.scss');

injectTapEventPlugin();

const App = ({ children }) => {
  return (
    <MuiThemeProvider>
      {children}
    </MuiThemeProvider>
  );
};

export default App;

App.propTypes = {
  children: PropTypes.object.isRequired,
};
