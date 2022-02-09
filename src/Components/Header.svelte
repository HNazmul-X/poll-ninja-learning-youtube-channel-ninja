<script>
	import { Link } from 'svelte-navigator';
    
</script>

<header id="header">
    <h1>
        <img draggable="false" src="/img/poll_ninja_logo.svg" class="poll-ninja-logo" alt="" />
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
            .poll-ninja-logo {
                height: 100px;
                display: block;
                margin: auto;
                user-select: none;

            }
        }
    }
</style>
