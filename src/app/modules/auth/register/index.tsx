/* eslint-disable jsx-a11y/anchor-is-valid */
import { Field, Formik } from "formik";
import React, { RefObject, useRef, useState } from "react";
import { register } from "../../../api/authentication";
import { RoutePaths } from "../../../shared/constants/routePaths";
import "./../../../../styles/auth.css";
import { usePageTitle } from "./../../../hooks/usePageTitle";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

interface Props {}

const RegisterScreen: React.FunctionComponent<Props> = (props: Props) => {
  usePageTitle("Music Life | Register");

  const initialValue = {
    username: "",
    password: "",
    email: "",
    display_name: "",
  };

  const history = useHistory();

  const [inputRefs] = useState<{
    [key: string]: RefObject<HTMLInputElement>;
  }>({
    username: useRef<HTMLInputElement>(null),
    password: useRef<HTMLInputElement>(null),
    email: useRef<HTMLInputElement>(null),
    display_name: useRef<HTMLInputElement>(null),
  });

  const handleRegister = (values: any) => {
    if (!(/^.+@.+$/.test(values.email))) {
      window.alert("Your email is invalid. Please re-enter it!");
    } else if (values.password < 8) {
      window.alert(
        "Your password must be 8-character length. Please re-enter it!"
      );
    } else {
      register(
        values.email,
        values.password,
        values.display_name,
        values.username
      )
        .then((res) => {
          if (res.status) {
            history.push({
              pathname: "/signin",
            });
          } else {
            window.alert(res.errorMessage);
          }
        })
        .catch((error) => {
          console.log(error);
          window.alert("Cannot register. Please come back later");
        });
    }
  };

  return (
    <>
      <Formik
        initialValues={initialValue}
        onSubmit={(values) => {
          handleRegister(values);
        }}
      >
        {({ handleSubmit, values }) => (
          <div id="main-wrapper" className="oxyy-login-register">
            <div className="hero-wrap d-flex align-items-center h-100">
              <div className="hero-mask opacity-4 bg-secondary"></div>
              <div className="hero-bg hero-bg-scroll">
                <img
                  src="https://cdn3.pitchfork.com/longform/683/Year_In_Streaming_v2.jpg"
                  alt="MusicLife"
                  style={{ objectFit: "cover", width: "100%", height: "100%" }}
                />
              </div>
              <div className="hero-content mx-auto w-100 h-100">
                <div className="container">
                  <div className="row no-gutters min-vh-100">
                    <div className="col-md-6 d-flex flex-column">
                      <div className="row no-gutters my-auto">
                        <div className="col-10 col-lg-9 mx-auto text-center">
                          <div className="logo mt-5 mb-3">
                            {/* {" "}
                            <a href="" title="MusicLife">
                              <img
                                src="images/logo-lg-light.png"
                                alt="MusicLife"
                              />
                            </a>{" "} */}
                          </div>
                          <h1 className="text-5 font-weight-400 text-white mb-5">
                            Looks like you're new here!
                          </h1>
                          <h2 className="text-white line-height-3 mb-5">
                            Join our group in few minutes! Sign up with your
                            details to get started
                          </h2>
                          <Link to="/MusicLife.apk" target="_blank" download href="" className="text-light mx-lg-5">
                            <u>Download our mobile app.</u>
                          </Link>{" "}
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 d-flex align-items-center py-5">
                      <div className="container my-auto py-4 shadow-lg bg-white">
                        <div className="row">
                          <div className="col-11 col-lg-11 mx-auto">
                            <h3 className="text-9 font-weight-600 text-center mt-2 mb-3">
                              Create an Account
                            </h3>
                            <p className="text-center mb-4">
                              Already have an account?{" "}
                              <a
                                className="btn-link"
                                href={RoutePaths.Auth.SignIn}
                              >
                                <u>Sign In</u>
                              </a>
                            </p>

                            <div className="form-group">
                              <label
                                className="text-dark font-weight-600"
                                htmlFor="emailAddress"
                              >
                                Email Address
                              </label>
                              <Field
                                innerRef={inputRefs.email}
                                component="input"
                                className="form-control rounded-0"
                                placeholder="Enter your email"
                                row={1}
                                id="inputEmail"
                                name="email"
                              />
                            </div>
                            <div className="form-group">
                              <label
                                className="text-dark font-weight-600"
                                htmlFor="emailAddress"
                              >
                                Username
                              </label>
                              <Field
                                innerRef={inputRefs.username}
                                component="input"
                                className="form-control rounded-0"
                                placeholder="Enter your username"
                                row={1}
                                id="inputUsername"
                                name="username"
                              />
                            </div>
                            <div className="form-group">
                              <label
                                className="text-dark font-weight-600"
                                htmlFor="emailAddress"
                              >
                                Display name
                              </label>
                              <Field
                                innerRef={inputRefs.display_name}
                                component="input"
                                className="form-control rounded-0"
                                placeholder="Enter your display name"
                                row={1}
                                id="inputDisplayName"
                                name="display_name"
                              />
                            </div>
                            <div className="form-group">
                              <label
                                className="text-dark font-weight-600"
                                htmlFor="loginPassword"
                              >
                                Password
                              </label>
                              <Field
                                innerRef={inputRefs.password}
                                component="input"
                                className="form-control rounded-0"
                                placeholder="Enter your password"
                                row={1}
                                id="inputPassword"
                                name="password"
                              />
                            </div>
                            <button
                              className="btn btn-dark btn-block rounded-0 my-4"
                              onClick={() => handleRegister(values)}
                            >
                              Create Account
                            </button>
                            <p className="text-center text-muted text-2 mb-0">
                              By creating an account, you agree to MusicLife{" "}
                              <a className="btn-link" href="#">
                                Terms
                              </a>{" "}
                              and{" "}
                              <a className="btn-link" href="#">
                                Privacy
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </Formik>
    </>
  );
};

export default RegisterScreen;
