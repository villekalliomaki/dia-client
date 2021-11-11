<!--
@component
Changes the application theme based on changes with the theme store.
-->
<script lang="ts">
    import { Theme } from "carbon-components-svelte";
    import { theme } from "../../store/theme";
</script>

<Theme theme={$theme}>
    <slot />
</Theme>
