<script lang="ts">
    import {
        SideNav,
        SideNavItems,
        SideNavLink,
        SideNavMenu,
        SideNavMenuItem,
        SideNavDivider,
    } from "carbon-components-svelte";

    import { destinations } from "./destinations";
    import { Destination, DestinationGroup } from "./destinations";

    import { router } from "../../router/router";

    export let isSideNavOpen = false;
</script>

<SideNav
    bind:isOpen={isSideNavOpen}
    on:click:overlay={() => (isSideNavOpen = false)}
    rail
>
    <SideNavItems>
        {#each destinations as destination}
            {#if destination instanceof Destination}
                <SideNavLink
                    class="bx--tile--clickable"
                    on:click={() => router.toPath(destination.targetPath)}
                    text={destination.name}
                    icon={destination.icon}
                    isSelected={$router.path.test(destination.targetPath)}
                />
            {/if}
            {#if destination instanceof DestinationGroup}
                <SideNavMenu text={destination.name} icon={destination.icon}>
                    {#each destination.destinations as subDestination}
                        <SideNavMenuItem
                            class="bx--tile--clickable"
                            on:click={() =>
                                router.toPath(subDestination.targetPath)}
                            text={subDestination.name}
                            isSelected={$router.path.test(
                                subDestination.targetPath
                            )}
                        />
                    {/each}
                </SideNavMenu>
            {/if}
        {/each}
    </SideNavItems>
</SideNav>
