<script>
    import PollDetails from "./PollDetails.svelte";
    export let polls = [];
</script>

<section id="allpoll-list">
    {#each polls as poll}
        <PollDetails {poll}  on:vote />
    {:else}
        <h1>Here is NO poll</h1>
    {/each}
</section>

<style lang="scss">
    #allpoll-list {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
    }
</style>
