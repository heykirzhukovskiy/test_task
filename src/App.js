import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { routes } from './routes';
import Nav from './components/nav';
import Auth from './hoc/auth';

import './index.css';
import 'normalize.css';

const App = () => {
  const renderSwitch = () => (
    <Switch>
      {routes.map(route => {
        const component = route.isPrivate ? Auth(route.component) : route.component;
        return (
          <Route
            key={route.path}
            exact={route.isExact}
            path={route.path}
            component={component}
          />
        );
      })}
    </Switch>
  );

  return (
    <Router>
      <React.Fragment>
        <Nav routes={routes.filter(route => route.isNavBar)}/>
        <div id='ui-content'>
          {renderSwitch()}
        </div>
      </React.Fragment>
    </Router>
  );
};

export default App;