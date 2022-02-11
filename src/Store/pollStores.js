import {writable} from "svelte/store"

export const pollStores = writable([
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
        voteA: 7,
        voteB: 4,
    },
]);