<script>
	import { Link } from 'svelte-navigator';
    
</script>

<header id="header">
    <h1 class="text-center">
        SN Poll
    </h1>
    <div class="text-center flex justify-center">
        <Link class="navigation-tab" to="/">Homepage</Link>
        <Link class="navigation-tab" to="/add-poll">About</Link>
    </div>
</header>

<style lang="scss">
    #header {
        background: white;
        border-bottom: 1px solid #ddd;
        h1 {
            margin: 0;
           &.text-center{
               color:#d91b42; padding: 10px;
           }
        }
    }
</style>
