import React, { Fragment } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './containers/Navbar';
import Shopcart from './containers/Shopcart';
import LandingPage from './views/LandingPage';
import NotFound from './views/NotFound';

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Router>
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/shopcart" component={Shopcart} />
          <Route path="/" component={NotFound} />
        </Switch>
      </Router>
    </Fragment>
  );
};

export default App;
