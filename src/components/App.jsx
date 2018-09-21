import React from 'react';
import PropTypes from 'prop-types';
import { MuiThemeProvider } from 'material-ui/styles';

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
