import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import { ConnectedRouter } from 'connected-react-router';
import { QueryParamProvider } from 'use-query-params';

import Footer from '../components/Footer';
import Header from '../components/Header';
import Search from '../pages/Search';
import history from './history';

// Pages
// Components

const Routes = () => (
  <ConnectedRouter history={history}>
    <QueryParamProvider ReactRouterRoute={Route}>
      <Container maxWidth="lg" className="asd">
        <Header />
        <Grid item xs={12} className="content">
          <Switch>
            <Route exact path="/" component={Search} />
          </Switch>
        </Grid>
        <Footer />

      </Container>
    </QueryParamProvider>
  </ConnectedRouter>
);

export default Routes;
