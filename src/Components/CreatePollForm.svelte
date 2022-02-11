<script>
    import Button from "./../Shared/Button.svelte";
    import { v4 } from "uuid";
    import { pollStores } from "../Store/pollStores";

    let fields = { question: "", answerA: "", answerB: "" };
    let error = { question: "", answerA: "", answerB: "" };
    let valid = false;
    export let onTabChange;

    const handleCreatePoll = () => {
        valid = true;

        //validate Question
        if (fields.question.trim().length < 5) {
            valid = false;
            error.question = "Question Must be greater then 5 chars";
        } else {
            error.question = "";
        }

        //validate Answer a
        if (fields.answerA.trim().length < 1) {
            valid = false;
            error.answerA = "Answer a Must be greater then 1 chars";
        } else {
            error.answerA = "";
        }

        //validate Answer a
        if (fields.answerB.trim().length < 1) {
            valid = false;
            error.answerB = "Answer B Must be greater then 1 chars";
        } else {
            error.answerB = "";
        }

        if (valid) {
            const poll = { ...fields, voteA: 0, voteB: 0, id: v4() };
            pollStores.update((value) => [...value, poll]);
            onTabChange("Current Polls");
        }
    };
</script>

<div class="create-poll-form">
    <form on:submit|preventDefault={handleCreatePoll}>
        <div class="input-field">
            <label for="poll-question">Poll Question</label>
            <input type="text" name="question" id="poll-question" bind:value={fields.question} />
            <p class="error">{error.question}</p>
        </div>
        <div class="input-field">
            <label for="answer-a">Anser A</label>
            <input type="text" name="answer-b" id="answer-a" bind:value={fields.answerA} />
            <p class="error">{error.answerA}</p>
        </div>
        <div class="input-field">
            <label for="answer-b">Answer B</label>
            <input type="text" name="answerA" id="answer-b" bind:value={fields.answerB} />
            <p class="error">{error.answerB}</p>
        </div>
        <div class="text-center">
            <Button inverse={false} type="secondary">Add Poll</Button>
        </div>
    </form>
</div>

<style lang="scss">
    .create-poll-form {
        max-width: 400px;
        margin: 3rem auto;

        .input-field {
            margin-bottom: 20px;
        }
        p.error {
            margin: 0px;
            font-size: 14px;
            color: #d91b42;
        }

        input {
            width: 100%;
            padding: 10px 10px;
            font-size: 1.1rem;
            border-radius: 7px;
            &:focus {
                outline: none;
            }
        }
        label {
            font-size: 1.2rem;
            margin-bottom: 7px;
            font-weight: 500;
        }
    }
</style>
