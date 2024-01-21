import { AppClient } from "./client/AppClient";

export const HOST = '127.0.0.1:8000';

const JWT_KEY_NAME = 'jwt';

/** @param {string} jwt */
export function setJwt(jwt) {
    localStorage.setItem(JWT_KEY_NAME, jwt);
}

export const getJwt = async () => {
    try {
        return localStorage.getItem(JWT_KEY_NAME) || '';
    } catch (error) {
        return "";
    }
}

/**
 * @param {number} id
 */
export function getImagePath(id) {
    switch (id) {
        case 1:
            return "/avatar/anonymous-avatar.png"
        case 2:
            return "/avatar/art-avatar.jpg"
        case 3:
            return "/avatar/dog-avatar.jpg"
        case 4:
            return "/avatar/eagle-avatar.jpg"
        case 5:
            return "/avatar/female-avatar.png"
        case 6:
            return "/avatar/godess-avatar.png"
        case 7:
            return "/avatar/pinguin-avatar.webp"
        case 8:
            return "/avatar/planet-avatar.webp"
        default:
            return "./photorandom.png"
    }
}

export const client = new AppClient({
    BASE: `http://${HOST}`,
    TOKEN: getJwt
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
