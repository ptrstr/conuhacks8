<script>
    import { getUserId } from "$lib";

    /** @type {number} */
    export let time;

    /** @type {string} */
	export let content;

    /** @type {string} */
    export let author;
</script>

{#await getUserId()}
{:then userId}
<div class="chat {author} {userId} {author == userId ? 'chat-end' : 'chat-start'}">
    <div class="chat-header">{new Date(time).toLocaleString()}</div>
    <div class="chat-bubble">{content}</div>
</div>
{/await}