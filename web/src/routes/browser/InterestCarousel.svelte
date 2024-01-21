<script>
    import { getImagePath } from "$lib";
    // /** @type {number} */
    // export let time;

    import Card from "../Card.svelte";

    // /** @type {string} */
	// export let content;

    export let datasource;

    /** @type {string} */
     export let title;
</script>

<h2 class="text-2xl font-bold">{title}</h2>
<div class="carousel carousel-center max-w-md p-4 space-x-4 rounded-box">
    {#if $datasource.length == 0}
        <div class="carousel-item">
            <div class="skeleton w-96 aspect-card bg-base-100 shadow-xl"></div>
        </div>
    {:else}
        {#each $datasource as card}
            <div class="carousel-item">
                <Card title={card.full_name} url='/userp/{card.id}' image={getImagePath(card.avatar)} />
            </div>
        {/each}
    {/if}
</div>