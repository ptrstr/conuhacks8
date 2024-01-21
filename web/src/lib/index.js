import { AppClient } from "./client/AppClient";

export const HOST = '127.0.0.1:8000';

const JWT_KEY_NAME = 'jwt';

/** @param {string} jwt */
export function setJwt(jwt) {
    localStorage.setItem(JWT_KEY_NAME, jwt);
}

export const client = new AppClient({
    BASE: `http://${HOST}`,
    TOKEN: async () => localStorage.getItem(JWT_KEY_NAME) || ''
});


/**
 * @type {string|null}
 */
let userId = null;

export async function getUserId() {
    if (userId === null) {
        await client.default.whoamiWhoamiGet()
            .then(
                (id) => userId = id,
                () => userId = ''
            );
    }

    return userId;
}