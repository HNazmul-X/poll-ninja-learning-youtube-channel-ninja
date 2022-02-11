<script>
    export let type = "primary";
    export let flat = false;
    export let inverse = false;
</script>

<button class={type} class:flat class:inverse on:click>
    <slot />
</button>


<style lang="scss">
    button{
        border:0px;
        cursor: pointer;
        border-radius: 6px;
        padding: 8px 20px;
        font-weight: bold;
        box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
    }
    button.primary{
        background:#d91b42;
        color:white;
    }
    button.secondary{
        background:#43c490;
        color:white;
    }
    button.flat{
        box-shadow: none;
    }
    button.primary.inverse{
        background:white;
        color:#d91b42;
        border:2px solid #d91b42;
    }
    button.secondary.inverse{
        background:white;
        color:#43c490;
        border:2px solid #43c490;
    }
</style>
