import { writable } from "svelte/store";
import { client } from "$lib";

/** @type {import("svelte/store").Writable<import("$lib/client").Card[]>} */
export const feedBuddies = writable([]);

/** @type {import("svelte/store").Writable<import("$lib/client").Card[]>} */
export const feedDiscovery = writable([]);

export function loadFeeds() {
    client.default.feedBuddiesFeedsBuddiesGet().then((f) => feedBuddies.set(f.feed));
    client.default.feedDiscoveryFeedsDiscoveryGet().then((f) => feedDiscovery.set(f.feed));
}