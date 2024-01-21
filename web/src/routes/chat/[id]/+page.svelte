<script lang="ts">
	import Message from './Message.svelte'
	import Input from './Input.svelte'
    import { messages, initWebsocket } from './stores.js';
    import type { ComponentEvents } from 'svelte';
    import type { PageData } from './$types';
    import { onMount } from 'svelte';
    import { client } from '$lib';

    export let data: PageData;

    async function sendMessage(event: ComponentEvents<Input>['submit']) {
        client.chat.sendMessageChatMessagesOtherIdPost(data.id, event.detail)
    }

    onMount(() => {
        initWebsocket(data.id);
    })
</script>

<div class="container mx-auto h-screen max-w-3xl">
    {#each $messages as message}
        <Message time={message.time} content={message.content} isSelf={message.isSelf} />
    {/each}
    <div class="relative">
        <Input on:submit={sendMessage} />
    </div>
</div>