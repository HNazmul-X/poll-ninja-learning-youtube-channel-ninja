<script>
    import Tabs from "./../Shared/Tabs.svelte";
    const tabItems = ["Current Polls", "Add New Poll"];
    let activeTab = tabItems[0];
</script>

<div id="homepage">
    <Tabs {activeTab} {tabItems} on:tabChange={(e) => (activeTab = e.detail)} />
    <div class="tab-content">
        {#if activeTab==="Current Polls"}
            <p>All Poll List will going from Here</p>
        {:else if activeTab==="Add New Poll"}
            <p>Add New Poll Here</p>
        {/if}
    </div>
</div>
