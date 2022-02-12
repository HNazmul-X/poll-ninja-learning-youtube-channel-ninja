<script>
    import AllPollList from "./../Components/AllPollList.svelte";
    import CreatePollForm from "./../Components/CreatePollForm.svelte";
    import Tabs from "./../Shared/Tabs.svelte";
    const tabItems = ["Current Polls", "Add New Poll"];
    let activeTab = tabItems[0];
    

    const onTabChange = (tabname)=> {
        activeTab = tabname
    }


</script>

<div id="homepage">
    <Tabs {activeTab} {tabItems} on:tabChange={(e) => (activeTab = e.detail)} />
    <div class="tab-content">
        {#if activeTab === "Current Polls"}
            <AllPollList/>
        {:else if activeTab === "Add New Poll"}
            <CreatePollForm {onTabChange} />
        {/if}
    </div>
</div>

<style>
</style>
