<script>
    import AllPollList from "./../Components/AllPollList.svelte";
    import CreatePollForm from "./../Components/CreatePollForm.svelte";
    import Tabs from "./../Shared/Tabs.svelte";
    const tabItems = ["Current Polls", "Add New Poll"];
    let activeTab = tabItems[0];
    let allPolls = [
        {
            question: "Which Programming Language Do you Prefer?",
            answerA: "Python",
            answerB: "Javascript",
            id: "4fbefd3a-140e-4469-8f52-927033831f44",
            voteA: 10,
            voteB: 15,
        },
        {
            question: "Are you wake up early in the Morning?",
            answerA: "Yes",
            answerB: "Not",
            id: "81461145-67fc-43f7-afcb-a41b86a82362",
            voteA: 10,
            voteB: 15,
        },
    ];
    const handleAddPoll = (e) => {
        allPolls = [...allPolls, e.detail];
        activeTab = tabItems[0];
    };

    const handleVote = (e) => {
        const { option, id } = e.detail;
        const copiedPoll = [...allPolls];
        let votedPoll = copiedPoll.find((item) => item.id === id);
        if (option === "a") {
            votedPoll.voteA++;
        } else if (option === "b") {
            votedPoll.voteB++;
        }
        allPolls = copiedPoll;
    };
</script>

<div id="homepage">
    <Tabs {activeTab} {tabItems} on:tabChange={(e) => (activeTab = e.detail)} />
    <div class="tab-content">
        {#if activeTab === "Current Polls"}
            <AllPollList polls={allPolls} on:vote={handleVote} />
        {:else if activeTab === "Add New Poll"}
            <CreatePollForm on:addPoll={handleAddPoll} />
        {/if}
    </div>
</div>
