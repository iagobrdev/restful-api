import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Login from './pages/Login';
import Books from './pages/Books';
import Portifolio from './pages/Portifolio';

export default function Routes() {
    return (
        <Router>
            <PrivateRoute path='/books' component={Books} />
            <Route path='/login' exact component={Login}/>
            <Route path='/' exact component={Portifolio}/>
        </Router>
    );
}

function PrivateRoute({ component: Component, ...rest }) {
    function isAuthenticated() {
        return localStorage.getItem('accessToken') !== null;
    }

    return (
        <Route
            {...rest}
            render={props =>
                isAuthenticated() ? (
                    <Component {...props} />
                ) : (
                    <Redirect to="/login" />
                )
            }
        />
    );
}