import { client, HOST } from '$lib';
import { writable } from 'svelte/store';

const data = [
    {
        content: 'foo',
        isSelf: true,
        time: 0
    },
    {
        content: 'Hello',
        isSelf: false,
        time: 1
    },
];

export const messages = writable(data);
        
/** @param {string} client_id */
export async function initWebsocket(client_id) {
    let key = await client.chat.wsSetupChatWsSetupOtherIdGet(client_id).then((k) => k.key);

    const ws = new WebSocket(`ws://${HOST}/chat/ws/${key}`);
    //ws.onerror = () => window.location.href = '/';
    ws.onmessage = (event) => messages.update((s) => s.push({content: event.data, isSelf: true, time: 0}));
}