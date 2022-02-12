<script>
    import { fade, slide } from "svelte/transition";
    import { onDestroy, onMount } from "svelte";

    import { pollStores } from "./../Store/pollStores.js";
    import PollDetails from "./PollDetails.svelte";
</script>

{#if [...$pollStores].length >0}
<section id="allpoll-list">
    {#each $pollStores as poll (poll.id)}
        <PollDetails {poll} />
    {/each}
</section>
{:else}
<h1 in:fade={{duration:1000}} class="text-center" >No Poll Here</h1>
{/if}

<style lang="scss">
    #allpoll-list {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
        @media screen and (max-width: 600px) {
            grid-template-columns: 1fr;
        }
    }
</style>
