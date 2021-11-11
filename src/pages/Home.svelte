<script lang="ts">
    import { Column, Row, Grid, Button } from "carbon-components-svelte";
    import { query } from "svelte-apollo";
    import { SimplePing, SimplePingQuery } from "../generated/graphql";

    import FullView from "../view/full/FullView.svelte";

    const ping = query<SimplePingQuery>(SimplePing);
</script>

<FullView pageTitle="Home">
    <Grid>
        <Row>
            <Column>
                <h1>Home page</h1>
                <p>The front page.</p>
            </Column>
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
        </Row>
    </Grid>
</FullView>
