import type Route from "./route";

import Home from "../pages/home/Home.svelte";
import NotFound from "../pages/notFound/NotFound.svelte";
import RegisterPage from "../pages/register/RegisterPage.svelte";
import InfoPage from "../pages/info/InfoPage.svelte";

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
    {
        name: "Register",
        component: RegisterPage,
        path: /^\/register$/,
    },
    {
        name: "Info",
        component: InfoPage,
        path: /^\/info$/,
    },
];
