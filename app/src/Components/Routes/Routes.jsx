import React, {useContext} from 'react';
import {Switch, Route, Redirect} from "react-router-dom";
import {Context} from '../Context/Auth';
import Dashboard from "../pages/Dashboard";

function Routes() {
    const context = useContext(Context);
    const authRedirect = context.auth ? '/' : 'login';

    return (
        <>
            <Switch>
                <Route key="login" path="/login">

                </Route>
                <Route key="sign-up" path="/sign-up">

                </Route>
                <Route key="/" exact path="/">
                    <Dashboard />
                </Route>
                <Route key="*" path="*">
                    <Redirect to={authRedirect} />
                </Route>
            </Switch>
        </>
    );
}
export default Routes;
