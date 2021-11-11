<!--
@component
Renders routes based on route definitions.
-->
<script lang="ts">
    import { router } from "../../router/router";
</script>

{#if $router}
    <svelte:component this={$router.component} />
{/if}
