<script>
    // /** @type {number} */
    // export let time;

    import Card from "./Card.svelte";

    // /** @type {string} */
	// export let content;

    export let datasource;

    /** @type {string} */
     export let title;
</script>

<h2 class="text-2xl font-bold">{title}</h2>
<div class="carousel carousel-center rounded-box space-x-4">
    {#if $datasource.length == 0}
        <div class="carousel-item skeleton">
            
        </div>
    {:else}
        {#each $datasource as card}
            <div class="carousel-item">
                <Card title={card.title} url={card.url} image={card.image} />
            </div>
        {/each}
    {/if}
</div>