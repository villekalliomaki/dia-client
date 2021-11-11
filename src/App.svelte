<script lang="ts">
    import { Theme } from "carbon-components-svelte";
    import "carbon-components-svelte/css/all.css";

    import { theme } from "./store/theme";

    import { router } from "./router/router";

    import { ApolloClient, InMemoryCache } from "@apollo/client";
    import { setClient } from "svelte-apollo";
    import { WebSocketLink } from "@apollo/client/link/ws";

    const wsLink = new WebSocketLink({
        uri: `ws://localhost:8080/api/gql`,
        options: {
            reconnect: true,
        },
    });

    const client = new ApolloClient({
        link: wsLink,
        cache: new InMemoryCache(),
    });
    setClient(client);
</script>

<main>
    <Theme theme={$theme}>
        {#if $router}
            <svelte:component this={$router.component} />
        {/if}
    </Theme>
</main>
