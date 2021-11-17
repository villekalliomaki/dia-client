<script lang="ts">
    import { Content, Grid, Row, Column } from "carbon-components-svelte";
    import MinimalView from "../../view/minimal/MinimalView.svelte";
</script>

<MinimalView pageTitle="Info">
    <Content>
        <Grid>
            <Row>
                <Column>
                    <p>
                        Built on __buildDate__ from __branch__: __commitHash__,
                        using enpoint __endpointUrl__
                    </p>
                </Column>
            </Row>
        </Grid>
    </Content>
</MinimalView>
