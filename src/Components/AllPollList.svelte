<script>
    import { onDestroy, onMount } from "svelte";

    import { pollStores } from "./../Store/pollStores.js";
    import PollDetails from "./PollDetails.svelte";

</script>

<section id="allpoll-list">
    {#each $pollStores as poll}
        <PollDetails {poll}/>
    {:else}
        <h1>Here is NO poll</h1>
    {/each}
</section>

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
