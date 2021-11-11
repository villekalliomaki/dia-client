import type Route from "./route";

import Home from "../pages/Home.svelte";
import NotFound from "../pages/NotFound.svelte";

/// All the routes the app supports.
export const routes: Route[] = [
    {
        name: "Not found",
        component: NotFound,
        path: /^\/404$/,
    },
    {
        name: "Home",
        component: Home,
        path: /^\/$/,
    },
];
