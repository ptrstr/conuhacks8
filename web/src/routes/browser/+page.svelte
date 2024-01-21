<script>
    import InterestCarousel from "./InterestCarousel.svelte";
    import { feedBuddies, feedDiscovery, loadFeeds } from "./stores";
    import { onMount } from "svelte";

    onMount(loadFeeds);
</script>


<style>
.aspect-card {
    aspect-ratio: 4/3;
}
</style>

<div class="container mx-auto h-screen max-w-3xl">
    <InterestCarousel title="Find new buddies" datasource={feedBuddies} />

    <InterestCarousel title="Discover something new" datasource={feedDiscovery} />
</div>