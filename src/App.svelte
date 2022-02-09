<script>
    import Footer from "./Components/Footer.svelte";
    import Header from "./Components/Header.svelte";
    import { Router } from "svelte-navigator";
    import PrimaryRouter from "./Router/PrimaryRouter.svelte";
</script>

<Router>
    <Header />
    <PrimaryRouter />
    <Footer />
</Router>
