<script lang="ts">
    import { Column, Row, Grid } from "carbon-components-svelte";

    import MinimalView from "../view/minimal/MinimalView.svelte";
</script>

<MinimalView pageTitle="404">
    <Grid>
        <Row>
            <Column>
                <p>Route not found. <a href="/">Go to home page.</a></p>
            </Column>
        </Row>
    </Grid>
</MinimalView>
