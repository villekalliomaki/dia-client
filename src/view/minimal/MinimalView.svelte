<!--
@component
A view with a top bar without navigation or a side menu.
Navigation must be provided with the content of the page.
-->

<script lang="ts">
    import {
        Header,
        SkipToContent,
        Content,
    } from "carbon-components-svelte";

    export let pageTitle: string = "";
</script>

<Header company="DIA" platformName={pageTitle}>
    <div slot="skip-to-content">
        <SkipToContent />
    </div>
</Header>

<Content>
    <slot />
</Content>
