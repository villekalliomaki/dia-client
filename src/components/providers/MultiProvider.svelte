<!--
@component
Recursively creates multiple providers, created from first to last.
All providers must include a slot to create the following in.
The last provider doesn't include a slot.
-->
<script lang="ts">
    import type { SvelteComponent } from "svelte";

    export let providers: typeof SvelteComponent[];
</script>

<!-- If there are providers create the first one and pass others to the created one -->
{#if providers.length > 0}
    {#if providers.length > 1}
        <!-- If there are providers left remove the current one pass the rest to a new one -->
        <svelte:component this={providers[0]}>
            <svelte:self providers={providers.slice(1)} />
        </svelte:component>
    {:else}
        <!-- If this is the last provider, don't create a slot for the next one -->
        <svelte:component this={providers[0]} />
    {/if}
{/if}
