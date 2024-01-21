import { client, HOST } from '$lib';
import { writable } from 'svelte/store';

export const messages = writable([]);

async function errorRedirect() {
    document.location.href = '/';
}

/** @param {string} client_id */
export async function initWebsocket(client_id) {
    let key = await client.chat.wsSetupChatWsSetupGet();

    const ws = new WebSocket(`ws://${HOST}/chat/ws/${key.key}/${client_id}`);
    ws.onerror = errorRedirect;
    ws.onmessage = (event) => {
        messages.update((s) => [...s, JSON.parse(event.data)]);
    };
    ws.onclose = () => alert('error');

    return ws;
}

/** @param {string} client_id */
export async function loadMessages(client_id) {
    let loaded = await client.chat.readMessagesChatMessagesOtherIdGet(client_id);

    messages.set(loaded);
}