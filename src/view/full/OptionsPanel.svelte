<script lang="ts">
    import {
        HeaderAction,
        HeaderPanelDivider,
        HeaderPanelLinks,
        HeaderPanelLink,
        Dropdown,
    } from "carbon-components-svelte";
    import type { CarbonTheme } from "carbon-components-svelte/types/Theme/Theme.svelte";

    import { theme } from "../../store/theme";

    const themeOptions = [
        { id: "g100", text: "Black g100" },
        { id: "g90", text: "Darker g90" },
        { id: "g80", text: "Dark g80" },
        { id: "g10", text: "Light g10" },
        { id: "white", text: "White" },
    ];

    $: selected = themeOptions.map((e) => e.id).indexOf($theme);

    function setTheme(event) {
        theme.set(event.detail.selectedId as CarbonTheme);
        localStorage.setItem("theme", event.detail.selectedId);
    }
</script>

<HeaderAction>
    <HeaderPanelLinks>
        <HeaderPanelDivider>Local options</HeaderPanelDivider>
        <Dropdown
            style="margin: 0 1rem 0 1rem;"
            titleText="App theme"
            selectedIndex={selected}
            items={themeOptions}
            on:select={setTheme}
        />
        <HeaderPanelDivider>Switcher subject 2</HeaderPanelDivider>
        <HeaderPanelLink>Switcher item 1</HeaderPanelLink>
    </HeaderPanelLinks>
</HeaderAction>
