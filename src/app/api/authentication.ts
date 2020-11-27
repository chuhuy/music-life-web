import { API } from './index';
import { AUTH_URL, SIGNIN, SIGNINFB } from './../shared/constants/api';

export const signinWithEmail = (email: string, password: string) => {
    const body = {
        email,
        password,
    };
    return API.post(AUTH_URL + SIGNIN, body);
};

export const signinWithUsername = async (username: string, password: string) => {
    const body = {
        username,
        password,
    };
    return API.post(AUTH_URL + SIGNIN, body);
};

export const signinWithFacebook = async (access_token: string) => {
    return API.post(AUTH_URL + SIGNINFB, { access_token });
}
