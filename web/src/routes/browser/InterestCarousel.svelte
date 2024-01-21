<script>
    // /** @type {number} */
    // export let time;

    // /** @type {string} */
	// export let content;

    export let datasource;

    /** @type {string} */
     export let title;
</script>

<h2 class="text-2xl font-bold">{title}</h2>
<div class="carousel carousel-center rounded-box space-x-4">
    {#each $datasource as entry}
        <div class="carousel-item">
            
        </div>
    {/each}
</div>