import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { QueryParamProvider } from 'use-query-params';
import Grid from '@material-ui/core/Grid';
import history from './history';

import Container from '@material-ui/core/Container';
// Pages
import Login from '../pages/Login';
// Components
import Header from '../components/Header';
import Footer from '../components/Footer';

const Routes = () => {
    const path = useSelector(state => state.router.location.pathname);
    const isAdmin = useSelector(state => state.general.isAdmin);
    return (
        <ConnectedRouter history={history}>
            <QueryParamProvider ReactRouterRoute={Route}>
                <Container maxWidth="lg" className="asd">
                    <Header></Header>
                    <Grid item xs={12} className="content">
                        <Switch>
                            <Route exact path="/" component={Login} />
                        </Switch>
                    </Grid>
                    <Footer></Footer>

                </Container>
            </QueryParamProvider>
        </ConnectedRouter>
    );
};

export default Routes;
