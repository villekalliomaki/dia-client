<!--
@component
Styles and manages displaying of all the active alerts.
-->
<script lang="ts">
    import Alert from "./Alert.svelte";

    import { alerts } from "../../store/alerts";
</script>

<ul class="right">
    {#each $alerts as alert}
        {#if alert.side === "right" || alert.side == null}
            <Alert {alert} />
        {/if}
    {/each}
</ul>

<ul class="left">
    {#each $alerts as alert}
        {#if alert.side === "left"}
            <Alert {alert} />
        {/if}
    {/each}
</ul>

<style>
    .left {
        z-index: 99;
        position: fixed;
        left: 0;
        bottom: 0;
        -moz-transform: rotate(180deg);
        -webkit-transform: rotate(180deg);
        transform: rotate(180deg);
    }

    .right {
        z-index: 99;
        position: fixed;
        right: 0;
        bottom: 0;
        -moz-transform: rotate(180deg);
        -webkit-transform: rotate(180deg);
        transform: rotate(180deg);
    }
</style>
