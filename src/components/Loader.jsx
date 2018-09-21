import React from 'react';
import PropTypes from 'prop-types';

const Loader = (props) => {
  const {
    retry, timedOut, error, pastDelay, isLoading,
  } = props;
  return (
    <div className="LoaderHolder">
      {error && (
      <div>
        Error!
        {' '}
        <button onClick={retry} type="button">Retry</button>
      </div>
      )}
      {timedOut && (
      <div>
        Taking a long time...
        {' '}
        <button onClick={retry} type="button">Retry</button>
      </div>
      )}
      {(pastDelay || isLoading) && !timedOut && !error && (<div className="Loader" />)}
    </div>
  );
};

export default Loader;

Loader.propTypes = {
  error: PropTypes.any,
  isLoading: PropTypes.bool,
  pastDelay: PropTypes.bool,
  retry: PropTypes.func,
  timedOut: PropTypes.bool,
};
