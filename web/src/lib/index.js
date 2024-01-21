import { AppClient } from "./client/AppClient";

const JWT_KEY_NAME = 'jwt';

/** @param {string} jwt */
export function setJwt(jwt) {
    localStorage.setItem(JWT_KEY_NAME, jwt);
}

export const client = new AppClient({
    BASE: 'http://127.0.0.1:8000',
    TOKEN: async () => localStorage.getItem(JWT_KEY_NAME) || ''
});