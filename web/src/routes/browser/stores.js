import { writable } from "svelte/store";
import { client } from "$lib";

/** @type {import("svelte/store").Writable<import("$lib/client").UserRead[]>} */
export const feedBuddies = writable([]);

/** @type {import("svelte/store").Writable<import("$lib/client").UserRead[]>} */
export const feedDiscovery = writable([]);

/**
 * @param {string[]} data 
 */
async function getUsers(data) {
    let promises = data.map((x) => client.default.getUserUserUserIdGet(x));
    return await Promise.all(promises);
}

export async function loadFeeds() {
    client.default.feedBuddiesFeedsBuddiesGet().then(async (f) => feedBuddies.set(await getUsers(f)));
    client.default.feedDiscoveryFeedsDiscoveryGet().then(async (f) => feedDiscovery.set(await getUsers(f)));

    console.log(feedBuddies);
}