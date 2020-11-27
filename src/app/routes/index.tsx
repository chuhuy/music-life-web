import React from 'react';
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { RoutePaths } from './../shared/constants/routePaths';
import AuthRoutes from './auth';
import BaseRoutes from './home';

interface Props extends StateProps, DispatchProps {}

const mapDispatchToProps = (dispatch: any) => {
    return {
    };
};
const mapStateToProps = (state: any) => ({
    user: state.auth.refresh_token
});

const Routes: React.FunctionComponent<Props> = (props: Props) => {
    return (
        <>
            <Router>
                <Switch>
                    {!props.user ? (
                        <AuthRoutes />
                    ) : (
                        <Redirect from={RoutePaths.Auth.SignIn} to={RoutePaths.Explore} />
                    )}
                    {!props.user ? (
                        <Redirect from={RoutePaths.Explore} to={RoutePaths.Auth.SignIn} />
                    ) : (
                        <BaseRoutes />
                    )}
                </Switch>
            </Router>
        </>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Routes);

type DispatchProps = ReturnType<typeof mapDispatchToProps>;
type StateProps = ReturnType<typeof mapStateToProps>
