<script>
    import { Router, Route } from "svelte-navigator";
    import About from "../Pages/About.svelte";
    import Homepage from "../Pages/Homepage.svelte";
</script>

<main>
    <Route primary={false} path="/" component={Homepage} />
    <Route path="/add-poll/" component={About} />
</main>

<style lang="scss">
    main {
        max-width: 800px;
        margin: auto;
        min-height: calc(100vh - 200px);
        padding: 2rem 0px;
        &:focus{
            outline: none;
        }
    }
</style>
