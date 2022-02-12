<script>
    import { createEventDispatcher } from "svelte";

    export let tabItems;
    export let activeTab;
    const dispatch = createEventDispatcher();
</script>

<div class="tabs">
    <ul>
        {#each tabItems as tab}
            <li on:click={() => dispatch("tabChange", tab)} class:active={tab === activeTab}>{tab}</li>
        {/each}
    </ul>
</div>

<style lang="scss">
    .tabs {
        ul {
            display: flex;
            list-style: none;
            gap: 20px;
            justify-content: center;
            padding: 0;
            li {
                font-size: 20px;
                cursor: pointer;
                font-weight: 500;

                &.active {
                    color: #d91b42;
                    border-bottom: 2px solid #d91b42;
                }
            }
        }
    }
</style>
