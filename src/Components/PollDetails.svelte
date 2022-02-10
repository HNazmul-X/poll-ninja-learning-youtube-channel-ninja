<script>
    import { afterUpdate, createEventDispatcher, onMount } from "svelte";

    export let poll = {};
    let highestHeight = 0;
    const dispatch = createEventDispatcher();

    //finding heighest questiont top element height
    function heighestHeightOfTopElement() {
        const allCard = document.querySelectorAll(".poll-detail-card .question-top");
        const allHeight = [...[...allCard].map((element) => element.clientHeight)];

        //finding Largest value
        let maxHeight = 0;
        for (let i = 0; i < allHeight.length; i++) {
            if (maxHeight < allHeight[i]) {
                maxHeight = allHeight[i];
            }
        }
        highestHeight = maxHeight;
    }
    afterUpdate(heighestHeightOfTopElement);

    const handleVote = (option, id) => {
        dispatch("vote", { option, id });
    };
</script>

<div class="poll-detail-card">
    <div class="question-top">
        {poll?.question}
    </div>
    <div class="answers">
        <div class="answer-block block-a" on:click={() => handleVote("a", poll.id)}>
            <span class="progress" />
            <div class="answer">{poll?.answerA}&nbsp; &nbsp; ({poll?.voteA})</div>
        </div>
        <div class="answer-block block-b" on:click={() => handleVote("b", poll.id)}>
            <span class="progress" />
            <div class="answer">{poll?.answerB}&nbsp; &nbsp; ({poll?.voteB})</div>
        </div>
    </div>
</div>

<style lang="scss">
    .poll-detail-card {
        background: white;
        padding: 10px;
        // border-radius: 7px;
        // box-shadow: 1px 2px 3px rgba(26, 26, 26, 0.13);
        border: 2px solid rgb(221, 221, 221);

        .question-top {
            color: black;
            font-weight: 500;
            margin: 0 0 20px 0;
            font-size: 18px;
        }

        .answers {
            width: 100%;
            .answer-block {
                padding: 10px;
                color: rgb(26, 26, 26);
                margin-bottom: 10px;
                position: relative;
                cursor: pointer;
                border: 1px solid #eee;
                &:hover {
                    opacity: 0.7;
                }
                .progress {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    top: 0px;
                    left: 0px;
                    z-index: 1;
                }
            }
        }
    }
</style>
