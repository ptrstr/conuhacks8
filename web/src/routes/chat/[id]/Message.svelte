<script>
    /** @type {number} */
    export let time;

    /** @type {string} */
	export let content;

    /** @type {boolean} */
    export let isSelf;
</script>

<div class="chat {isSelf ? 'chat-end' : 'chat-start'}">
    <div class="chat-header">{time}</div>
    <div class="chat-bubble">{content}</div>
</div>