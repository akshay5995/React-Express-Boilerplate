import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter, Switch, Route, Redirect,
} from 'react-router-dom';
import Loadable from 'react-loadable';
import Loader from './Loader';
import Bar from './Bar';

const MyLoadable = (opts) => {
  return Loadable(Object.assign({
    loading: (props) => {
      return Loader(props);
    },
    timeout: 2000,
  }, opts));
};

class View extends PureComponent {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    const { fetchMessage } = this.props;
    fetchMessage();
  }

  render() {
    const { message, error } = this.props;
    return (
      <BrowserRouter>
        <div className="View">
          <h1>React Express Boilerplate</h1>
          <h3>{message || error}</h3>
          <Bar />
          <div className="Content">
            <Switch>
              <Route
                component={MyLoadable({
                  loader: () => import(/* webpackChunkName: "WindowOne" */ './WindowOne'),
                })}
                exact
                path="/"
              />
              <Route
                component={MyLoadable({
                  loader: () => import(/* webpackChunkName: "WindowTwo" */ './WindowTwo'),
                })}
                path="/two"
              />
              <Route
                path="**"
                render={() => (
                  <Redirect to="/" />
                )}
              />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default View;

View.propTypes = {
  error: PropTypes.string,
  fetchMessage: PropTypes.func,
  message: PropTypes.string,
};
