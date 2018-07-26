import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Welcome extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    this.props.fetchMessage();
  }

  render() {
    return (
      <div className="container">
        <div className="message">
          {this.props.message ? this.props.message : this.props.error}
        </div>
        <span>This is a Minimal React Express Boilerplate</span>
      </div>
    );
  }
}

export default Welcome;

Welcome.propTypes = {
  error: PropTypes.string,
  fetchMessage: PropTypes.func,
  message: PropTypes.string,
};
