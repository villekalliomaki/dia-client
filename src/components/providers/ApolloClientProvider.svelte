<!--
@component
Creates and sets the Apollo client for the child contexts.
-->
<script lang="ts">
    import { setClient } from "svelte-apollo";
    import { client } from "../../api/apolloClient";

    setClient(client);
</script>

<slot />
