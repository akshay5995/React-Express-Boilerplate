import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

class Bar extends PureComponent {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <Link
          exact
          to="/"
        >
          Window One
        </Link>
        <Link
          exact
          to="/two"
        >
          Window Two
        </Link>
      </div>
    );
  }
}

export default Bar;
