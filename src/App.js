import React, { Component } from 'react';
import './App.scss';
import { Switch, Route, Router } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'
import routes from './routes'

const history = createHistory()

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  showContentRoutes = (routes) => {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        );
      });
    }
    return <Switch>{result}</Switch>;
  }

  render() {
    return (
      <Router history={history}>
          <div>
            <div>
              {this.showContentRoutes(routes)}
            </div>
          </div>
      </Router>
    );
  }
}

export default App;
