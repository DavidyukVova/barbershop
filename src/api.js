import * as axios from 'axios'
import i18n from "./i18n";
import Cookies from 'universal-cookie';

const TOKEN_NAME = 'token';
const LOGGED_NAME = 'logged';


const getPath = (path) => {
    if (path.substr(0, 1) !== '/') path = '/' + path;
    return `/${i18n.language.substr(0, 2)}/inner${path}`;
}


const getConfig = () => {
    let config = {
        headers: {},
        withCredentials: false
    };

    const token = getToken();
    if (token) {
        config.headers['X-AUTH-TOKEN'] = token;
    }
    return config;
};


export function saveToken(token, rememberMe = true) {

    if (token) {
        window.localStorage.setItem(TOKEN_NAME, token);
        window.localStorage.setItem(LOGGED_NAME, 1);
    } else {
        window.localStorage.removeItem(TOKEN_NAME);
        window.localStorage.removeItem(LOGGED_NAME);
    }

    if (rememberMe) {
        const cookies = new Cookies();
        if (token) {
            cookies.set(TOKEN_NAME, token);
            cookies.set(LOGGED_NAME, 1);
        } else {
            cookies.remove(LOGGED_NAME);
        }
    }
}

export function getLogged() {
    let logged = window.localStorage.getItem(LOGGED_NAME)
    if (logged === undefined) {
        logged = new Cookies().get(LOGGED_NAME)
    }
    return parseInt(logged)

}

export function getToken() {
    return window.localStorage.getItem(TOKEN_NAME)
}

export const getNoCatch = (path, params = {}) => (
    axios.get(
        getPath(path),
        {
            ...getConfig(),
            params: params,
            paramsSerializer: (params) => (JSON.stringify(params))
        }
    )
);


export const get = (path, params = {}) => (
    getNoCatch(path, params)
        .catch(error => {
            throw error;
        })
);

export const postNoCatch = (path, data = {}) => (
    axios.post(getPath(path), data, getConfig())
)

export const post = (path, data = {}) => (
    postNoCatch(path, data)
        .catch(error => {
            throw error;
        })
)


export const put = (path, data = {}) => {

    return axios.put(getPath(path), data, getConfig());
}

export const doDeleteNoCatch = (path, data = {}) => {

    return axios.delete(getPath(path), getConfig());
}

export const doDelete = (path, data = {}) => {

    return doDeleteNoCatch(path, data)
        .catch( error => {
            throw error;
        });
}