<!--
@component
A single alert, which displays on the page with an animation.
-->
<script lang="ts">
    import {
        InlineNotification,
        NotificationActionButton,
    } from 'carbon-components-svelte';

    import { onMount } from 'svelte';
    import { fly } from 'svelte/transition';

    import { Alert, alerts } from '../../store/alerts';

    export let alert: Alert;

    // If a automatic timeout is set, remove the alert after the duration.
    onMount(() => {
        if (alert.closeIn) {
            alerts.removeDelayed(alert);
        }
    });
</script>

<li
    in:fly={{ x: alert.side == 'left' ? -200 : 200, duration: 100 }}
    out:fly={{ x: alert.side == 'left' ? -200 : 200, duration: 100 }}
>
    <InlineNotification
        style="margin-right:0px;"
        hideCloseButton={alert.hideClose}
        kind={alert.kind}
        title={alert.title}
        subtitle={alert.subtitle}
        lowContrast={alert.lowContrast}
        on:close={() => {
            alerts.removeAlert(alert);
        }}
    >
        <div slot="actions">
            {#if alert.action}
                <NotificationActionButton
                    on:click={() => alert.action.callback(alert)}
                    >{alert.action.label}</NotificationActionButton
                >
            {/if}
        </div>
    </InlineNotification>
</li>

<style>
    li {
        -moz-transform: rotate(-180deg);
        -webkit-transform: rotate(-180deg);
        transform: rotate(-180deg);
    }
</style>
