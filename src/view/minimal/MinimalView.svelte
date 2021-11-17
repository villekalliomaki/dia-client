<!--
@component
A view with a top bar without navigation or a side menu.
Navigation must be provided with the content of the page.
Does not include `<Content></Content>`.
-->
<script lang="ts">
    import { Header, SkipToContent } from "carbon-components-svelte";

    export let pageTitle: string = "";
</script>

<Header company="DIA" platformName={pageTitle}>
    <div slot="skip-to-content">
        <SkipToContent />
    </div>
</Header>

<slot />
