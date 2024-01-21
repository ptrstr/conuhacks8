<script lang="ts">
	import Fa from 'svelte-fa';
    import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
    import { createEventDispatcher } from 'svelte';

    interface InputEvent {
        submit: string
    }

    const dispatch = createEventDispatcher<InputEvent>();

    let message = '';

    async function submit() {
        if (message.length === 0)
            return;
        
        dispatch('submit', message);

        message = '';
    };
</script>

<form class="join w-full" on:submit|preventDefault={submit}>
    <input type="text" placeholder="Type here" class="input input-primary w-full join-item" bind:value={message} />
    <button class="btn btn-circle btn-outline join-item">
        <Fa icon={faPaperPlane} />
    </button>
</form>