import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { RoutePaths } from './../../shared/constants/routePaths';
import SignInScreen from './../../modules/auth/signIn';
import ForgotPasswordScreen from './../../modules/auth/forgotPassword';
import RegisterScreen from './../../modules/auth/register';

const AuthRoutes = () => {
    return (
        <>
            <Switch>
                <Route path={RoutePaths.Auth.SignIn} exact component={SignInScreen} />
                <Route path={RoutePaths.Auth.Register} exact component={RegisterScreen} />
                <Route path={RoutePaths.Auth.ForgotPassword} exact component={ForgotPasswordScreen} />
                <Redirect to={RoutePaths.Auth.SignIn} />
            </Switch>
        </>
    )
};

export default AuthRoutes;
