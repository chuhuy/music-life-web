import { API } from "./index";
import {
  AUTH_URL,
  FORGOT,
  REGISTER,
  SIGNIN,
  SIGNINFB,
} from "./../shared/constants/api";

export const signinWithEmail = (email: string, password: string) => {
  const body = {
    email,
    password,
  };
  return API.post(AUTH_URL + SIGNIN, body);
};

export const signinWithUsername = async (
  username: string,
  password: string
) => {
  const body = {
    username,
    password,
  };
  return API.post(AUTH_URL + SIGNIN, body);
};

export const signinWithFacebook = async (access_token: string) => {
  return API.post(AUTH_URL + SIGNINFB, { access_token });
};

export const forgotPassword = async (email: string) => {
  const body = {
    email,
  };
  return API.post(AUTH_URL + FORGOT, body);
};

export const register = async (
  email: string,
  password: string,
  display_name: string,
  username: string
) => {
  const body = {
    username,
    email,
    password,
    display_name,
  };
  return API.post(AUTH_URL + REGISTER, body);
};
