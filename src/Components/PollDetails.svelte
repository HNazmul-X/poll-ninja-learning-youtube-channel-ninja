<script>
    import Button from "./../Shared/Button.svelte";
    import { pollStores } from "./../Store/pollStores.js";

    export let poll = {};

    //reactive values;
    $: totalVotes = poll.voteA + poll.voteB;
    $: voteA = (100 / totalVotes) * poll.voteA;
    $: voteB = (100 / totalVotes) * poll.voteB;

    const handleVote = (option, id) => {
        let copiedPoll = [...$pollStores];
        let votedPoll = copiedPoll.find((p) => p.id === id);

        if (option === "a") {
            votedPoll.voteA++;
        } else if (option === "b") {
            votedPoll.voteB++;
        }
        pollStores.update(() => {
            let copiedPoll = [...$pollStores];
            let votedPoll = copiedPoll.find((p) => p.id === id);

            if (option === "a") {
                votedPoll.voteA++;
            } else if (option === "b") {
                votedPoll.voteB++;
            }
            return copiedPoll;
        });
    };

    let handleDeletePoll = (id) => {
        pollStores.update((polls) => {
            return polls.filter((p) => p.id !== id);
        });
    };
</script>

<div class="poll-detail-card">
    <div class="question-top">
        {poll?.question}
        <div class="total-vote">Total : {totalVotes}</div>
    </div>
    <div class="answers">
        <div class="answer-block block-a" on:click={() => handleVote("a", poll.id)}>
            <span style="--width:{voteA}%" class="progress {voteA > voteB ? 'heighest' : 'loweest'}" />
            <div class="answer">{poll?.answerA}&nbsp; &nbsp; ({poll?.voteA})</div>
        </div>
        <div class="answer-block block-b" on:click={() => handleVote("b", poll.id)}>
            <span style="--width:{voteB}%" class="progress {voteA < voteB ? 'heighest' : 'loweest'}" />
            <div class="answer">{poll?.answerB}&nbsp; &nbsp; ({poll?.voteB})</div>
        </div>
    </div>
    <div class="button">
        <Button on:click={() => handleDeletePoll(poll.id)}>Delete</Button>
    </div>
</div>

<style lang="scss">
    .poll-detail-card {
        background: white;
        padding: 10px;
        // border-radius: 7px;
        // box-shadow: 1px 2px 3px rgba(26, 26, 26, 0.13);
        border: 2px solid #dddddd;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .question-top {
            color: black;
            font-weight: 500;
            margin: 0 0 20px 0;
            font-size: 18px;
            position: relative;
            z-index: 1;
            .total-vote {
                font-size: 12px;
                background: #808080;
                padding: 5px 10px;
                display: inline-block;
                color: white;
                border-radius: 50px;
            }
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
                user-select: none;
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
                    width: var(--width);
                }
                .heighest {
                    background: rgba(0, 128, 0, 0.185);
                    border-left: 4px solid #43c490;
                }
                .loweest {
                    background: rgba(255, 0, 0, 0.226);
                    border-left: 4px solid #d91b42;
                }
            }
        }
    }
</style>
