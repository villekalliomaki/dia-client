<script lang="ts">
    import {
        HeaderNav,
        HeaderNavMenu,
        HeaderNavItem,
    } from "carbon-components-svelte";

    import { destinations } from "./destinations";
    import { Destination, DestinationGroup } from "./destinations";

    import { router } from "../../router/router";
</script>

<!-- Include style="display: block; overflow-x: auto;" to disable hiding when using slim displays -->
<HeaderNav>
    {#each destinations as destination}
        {#if destination instanceof Destination}
            <HeaderNavItem
                class="bx--tile--clickable"
                on:click={() => router.toPath(destination.targetPath)}
                text={destination.name}
                isSelected={$router.path.test(destination.targetPath)}
            />
        {/if}
        {#if destination instanceof DestinationGroup}
            <HeaderNavMenu text={destination.name}>
                {#each destination.destinations as subDestination}
                    <HeaderNavItem
                        class="bx--tile--clickable"
                        on:click={() =>
                            router.toPath(subDestination.targetPath)}
                        text={subDestination.name}
                        isSelected={$router.path.test(
                            subDestination.targetPath
                        )}
                    />
                {/each}
            </HeaderNavMenu>
        {/if}
    {/each}
</HeaderNav>
