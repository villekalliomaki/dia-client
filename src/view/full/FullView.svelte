<!--
@component
A complete view with all navigation and options components.
User should be logged in while seeing this, since most navigation links lead to
destinations behind a login guard.
-->
<script lang="ts">
    import {
        Header,
        SkipToContent,
        Content,
        Tag,
        ToastNotification,
        HeaderUtilities,
        HeaderAction,
        HeaderGlobalAction,
        HeaderPanelLinks,
        HeaderPanelDivider,
        HeaderPanelLink,
        HeaderSearch,
    } from "carbon-components-svelte";

    import HeaderNavigation from "./HeaderNavigation.svelte";
    import SideNavigation from "./SideNavigation.svelte";
    import OptionsPanel from "./OptionsPanel.svelte";

    import SettingsAdjust20 from "carbon-icons-svelte/lib/SettingsAdjust20";
    import UserAvatarFilledAlt20 from "carbon-icons-svelte/lib/UserAvatarFilledAlt20";

    import NotificationNew16 from "carbon-icons-svelte/lib/NotificationNew16";
    import Add16 from "carbon-icons-svelte/lib/Add16";

    export let pageTitle: string;

    let isSideNavOpen = false;
</script>

<Header company="DIA" platformName={pageTitle} bind:isSideNavOpen>
    <div slot="skip-to-content">
        <SkipToContent />
    </div>

    <Tag icon={NotificationNew16} type="cool-gray" interactive
        >2 new notifications</Tag
    >
    <Tag icon={Add16} type="warm-gray" interactive>New note</Tag>
    <Tag filter type="red">Downtime 12:00-18:00</Tag>

    <HeaderUtilities>
        <HeaderSearch placeholder="Site search" />
        <HeaderGlobalAction aria-label="Settings" icon={SettingsAdjust20} />
        <HeaderAction
            icon={UserAvatarFilledAlt20}
            closeIcon={UserAvatarFilledAlt20}
        >
            <HeaderPanelLinks>
                <HeaderPanelDivider>Switcher subject 1</HeaderPanelDivider>
                <HeaderPanelLink>Switcher item 1</HeaderPanelLink>
                <HeaderPanelLink>Switcher item 2</HeaderPanelLink>
                <HeaderPanelLink>Switcher item 3</HeaderPanelLink>
                <HeaderPanelLink>Switcher item 4</HeaderPanelLink>
                <HeaderPanelDivider>Switcher subject 2</HeaderPanelDivider>
                <HeaderPanelLink>Switcher item 1</HeaderPanelLink>
                <HeaderPanelLink>Switcher item 2</HeaderPanelLink>
                <HeaderPanelDivider>Switcher subject 3</HeaderPanelDivider>
                <HeaderPanelLink>Switcher item 1</HeaderPanelLink>
            </HeaderPanelLinks>
        </HeaderAction>

        <OptionsPanel />
    </HeaderUtilities>
</Header>

<SideNavigation bind:isSideNavOpen />

<ToastNotification
    title="Test"
    subtitle="Testing"
    caption={new Date().toLocaleString()}
    kind="success"
    style="width: auto; margin: 3rem 0 0 3rem"
    lowContrast
/>
<Content style="margin-top: 0;">
    <slot />
</Content>
