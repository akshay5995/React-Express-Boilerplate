import React, { PureComponent } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
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

  render() {
    return (
      <BrowserRouter>
        <div className="View">
          <h1>React Express Boilerplate</h1>
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
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default View;
