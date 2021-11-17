<script lang="ts">
    import { Content, Column, Row, Grid } from "carbon-components-svelte";

    import MinimalView from "../../view/minimal/MinimalView.svelte";
</script>

<MinimalView pageTitle="404">
    <Content>
        <Grid>
            <Row>
                <Column>
                    <p>Page not found.</p>
                </Column>
            </Row>
        </Grid>
    </Content>
</MinimalView>
