<script lang="ts">
    import "carbon-components-svelte/css/all.css";

    import MultiProvider from "./components/providers/MultiProvider.svelte";
    import ApolloClientProvider from "./components/providers/ApolloClientProvider.svelte";
    import ThemeProvider from "./components/providers/ThemeProvider.svelte";
    import RouterProvider from "./components/providers/RouterProvider.svelte";
</script>

<main>
    <MultiProvider
        providers={[ApolloClientProvider, ThemeProvider, RouterProvider]}
    />
</main>
