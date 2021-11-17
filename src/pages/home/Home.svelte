<script lang="ts">
    import { Column, Row, Grid, Button } from "carbon-components-svelte";
    import { query } from "svelte-apollo";
    import { SimplePing, SimplePingQuery } from "../../generated/graphql";
    import { alerts } from "../../store/alerts";

    import FullView from "../../view/full/FullView.svelte";

    const ping = query<SimplePingQuery>(SimplePing);

    let counter = 0;
</script>

<FullView pageTitle="Home">
    <Grid>
        <Row>
            <Column>
                <Button on:click={ping.refetch}>Reload</Button>
                {#if $ping.loading}
                    <p>Loading...</p>
                {:else if $ping.error}
                    <p>Error: {$ping.error}</p>
                {:else}
                    <p>Data: {$ping.data.ping}</p>
                {/if}
            </Column>
            <Column>
                <Button
                    on:click={() => {
                        counter++;
                        alerts.error("Testing", `This is alert #${counter}`, {
                            action: {
                                label: "Nothing",
                                callback: () => {},
                            },
                            closeIn: 5,
                        });
                    }}>Error alert</Button
                >
                <Button
                    on:click={() => {
                        counter++;
                        alerts.success("Testing", `This is alert #${counter}`, {
                            action: {
                                label: "Nothing",
                                callback: () => {},
                            },
                            closeIn: 5,
                        });
                    }}>Success alert</Button
                >
            </Column>
        </Row>
    </Grid>
</FullView>
