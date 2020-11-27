import React from 'react';
import './../../../../styles/auth.css';
import { RoutePaths } from '../../../shared/constants/routePaths';
import { usePageTitle } from './../../../hooks/usePageTitle';

interface Props {}

const ForgotPasswordScreen: React.FunctionComponent<Props> = (props: Props) => {
    
    usePageTitle('Music Life | Forgot Password');
    
    return (
        <>
            <div id="main-wrapper" className="oxyy-login-register">
                <div className="hero-wrap d-flex align-items-center h-100">
                    <div className="hero-mask opacity-4 bg-secondary"></div>
                    <div className="hero-bg hero-bg-scroll">
                        <img src="https://cdn3.pitchfork.com/longform/683/Year_In_Streaming_v2.jpg" alt="MusicLife" style={{objectFit: 'cover', width: '100%', height: '100%'}} />    
                    </div>
                    <div className="hero-content mx-auto w-100 h-100">
                    <div className="container">
                        <div className="row no-gutters min-vh-100"> 
                        <div className="col-md-6 d-flex flex-column">
                            <div className="row no-gutters my-auto">
                            <div className="col-10 col-lg-9 mx-auto text-center">
                                <div className="logo mt-5 mb-3"> <a href="index.html" title="Music Life"><img src="images/logo-lg-light.png" alt="Music Life"/></a> </div>
                                <h1 className="text-5 font-weight-400 text-white mb-5">It's free and always will be</h1>
                            </div>
                            </div>
                        </div>
                        <div className="col-md-6 d-flex align-items-center py-5">
                            <div className="container my-auto py-4 shadow-lg bg-white">
                            <div className="row">
                                <div className="col-11 col-lg-11 mx-auto">
                                <h3 className="text-9 font-weight-600 text-center mt-2 mb-3">Forgot password?</h3>
                                <p className="text-muted text-center mb-4">Enter the email address associated with your account.</p>
                                <form id="forgotForm" method="post">
                                    <div className="form-group">
                                    <label className="text-dark font-weight-600" htmlFor="emailAddress">Email address</label>
                                    <input type="text" className="form-control rounded-0" id="emailAddress" placeholder="Enter Your Email Address"/>
                                    </div>
                                    <button className="btn btn-dark btn-block rounded-0 my-4" type="submit">Continue</button>
                                </form>
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
                                <p className="text-center">Return to <a className="btn-link" href={RoutePaths.Auth.SignIn}><u>Sign In</u></a></p>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default ForgotPasswordScreen;
