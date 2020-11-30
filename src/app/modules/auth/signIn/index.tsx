import React, { RefObject, useRef, useState } from 'react';
import { RoutePaths } from '../../../shared/constants/routePaths';
import './../../../../styles/auth.css';
import { usePageTitle } from './../../../hooks/usePageTitle';
import { loginUsername, loginEmail } from './../../../redux/modules/auth/actions';
import { ReduxCallbacks } from './../../../models/redux/ReduxCallback'
import { SignInForm } from './../../../models/form/signIn';
import { connect } from 'react-redux';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';

interface Props extends DispatchProps, StateProps {}

const mapDispatchToProps = (dispatch: any) => {
    return {
        onLoginUsername: (user: SignInForm, callbacks?: ReduxCallbacks) => dispatch(loginUsername(user, callbacks)),
        onLoginEmail: (user: SignInForm, callbacks?: ReduxCallbacks) => dispatch(loginEmail(user, callbacks)),
    };
};
const mapStateToProps = (state: any) => ({
    user: state.auth.refresh_token
});
const SignInScreen: React.FunctionComponent<Props> = (props: Props) => {
    console.log(props.user)
    
    usePageTitle('Music Life | Sign In');

    const initialValue: SignInForm = {
        username: '',
        password: ''
    };
    
    const [inputRefs] = useState<{
		[key: string]: RefObject<HTMLInputElement>;
	}>({
        username: useRef<HTMLInputElement>(null),
        password: useRef<HTMLInputElement>(null)
	});

    const handleSignIn = (values: SignInForm) => {
        console.log(values);
        if (/^.+@.+$/.test(values.username))
            {props.onLoginEmail(values, {
                onFailed: error =>  console.log(error),
            });}
        else {props.onLoginUsername(values,{
            onFailed: error =>  console.log(error),
        });}
    }

    return (
        <>
            <Formik
                initialValues={initialValue}
                onSubmit={(values) => {handleSignIn(values);}}
            >
                {({handleSubmit, values}) => (<>
                    <div id="main-wrapper" className="oxyy-login-register">
                        <div className="hero-wrap d-flex align-items-center h-100">
                            <div className="hero-mask opacity-4 bg-secondary"></div>
                            <div className="hero-bg hero-bg-scroll" >
                                <img src="https://cdn3.pitchfork.com/longform/683/Year_In_Streaming_v2.jpg" alt="MusicLife" style={{objectFit: 'cover', width: '100%', height: '100%'}} />    
                            </div> 
                            <div className="hero-content mx-auto w-100 h-100">
                            <div className="container">
                                <div className="row no-gutters min-vh-100"> 
                                <div className="col-md-6 d-flex flex-column">
                                    <div className="row no-gutters my-auto">
                                    <div className="col-10 col-lg-9 mx-auto text-center">
                                        <div className="logo mt-5 mb-3"> <a href="index.html" title="MusicLife"><img src="images/logo-lg-light.png" alt="MusicLife"/></a> </div>
                                        <h1 className="text-5 font-weight-400 text-white mb-5">It's free and always will be</h1>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-md-6 d-flex align-items-center py-5">
                                    <div className="container my-auto py-4 shadow-lg bg-white">
                                    <div className="row">
                                        <div className="col-11 col-lg-11 mx-auto">
                                        <h3 className="text-9 font-weight-600 text-center mt-2 mb-3">Sign In</h3>
                                        <p className="text-center mb-4">New to Music Life? <a className="btn-link" href={RoutePaths.Auth.Register}><u>Create an Account</u></a></p>
                                            <div className="form-group">
                                            <label className="text-dark font-weight-600" htmlFor="emailAddress">Username or Email Address</label>
                                            <Field
                                                innerRef={inputRefs.username}
                                                component="input"
                                                className="form-control rounded-0"
                                                placeholder="Enter your username or email"
                                                row={1}
                                                id="inputUsername"
                                                name="username"
                                            />
                                            </div>
                                            <div className="form-group">
                                            <label className="text-dark font-weight-600" htmlFor="loginPassword">Password</label>
                                            <Field
                                                innerRef={inputRefs.password}
                                                component="input"
                                                className="form-control rounded-0"
                                                placeholder="Enter your password"
                                                row={1}
                                                id="inputPassword"
                                                name="password"
                                                type="password"
                                            />
                                            </div>
                                            <div className="row">
                                            <div className="col-sm">
                                                <div className="form-check custom-control custom-checkbox">
                                                <input id="remember-me" name="remember" className="custom-control-input" type="checkbox"/>
                                                <label className="custom-control-label rounded-0" htmlFor="remember-me">Keep me signed in</label>
                                                </div>
                                            </div>
                                            </div>
                                            <button className="btn btn-dark btn-block rounded-0 my-4" onClick={() => {handleSignIn(values)}}>Sign In</button>
                                        {/* <div className="d-flex align-items-center my-3">
                                            <hr className="flex-grow-1"/>
                                            <span className="mx-2 text-2 text-muted">Or sign in with</span>
                                            <hr className="flex-grow-1"/>
                                        </div>
                                        <div className="form-row mb-3">
                                            <div className="col-4">
                                            <button type="button" className="btn btn-outline-facebook btn-sm btn-block border-2 rounded-0 shadow-none"><span className="mr-2"><i className="fab fa-facebook-f"></i></span>Facebook</button>
                                            </div>
                                            <div className="col-4">
                                            <button type="button" className="btn btn-outline-google btn-sm btn-block border-2 rounded-0 shadow-none"><span className="mr-2"><i className="fab fa-google"></i></span>Google</button>
                                            </div>
                                            <div className="col-4">
                                            <button type="button" className="btn btn-outline-twitter btn-sm btn-block border-2 rounded-0 shadow-none"><span className="mr-2"><i className="fab fa-twitter"></i></span>twitter</button>
                                            </div>
                                        </div> */}
                                        <p className="text-center">Need to find <a className="btn-link" href={RoutePaths.Auth.ForgotPassword}><u>your username</u></a> or <a className="btn-link" href={RoutePaths.Auth.ForgotPassword}><u>your password</u></a>?</p>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                </>)}
            </Formik>
        </>
    )
};

export default connect(mapStateToProps, mapDispatchToProps)(SignInScreen);

type DispatchProps = ReturnType<typeof mapDispatchToProps>;
type StateProps = ReturnType<typeof mapStateToProps>;
