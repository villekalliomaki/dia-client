import type Route from "./route";

import Home from "../pages/home/Home.svelte";
import NotFound from "../pages/notFound/NotFound.svelte";
import RegisterPage from "../pages/register/RegisterPage.svelte";
import InfoPage from "../pages/info/InfoPage.svelte";
import { alerts } from "../store/alerts";

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
        guard: (user) => {
            if (!user) {
                alerts.error("Unauthorized", "You must login to continue.", {
                    closeIn: 10,
                });
                return "/register";
            }
        },
    },
    {
        name: "Register",
        component: RegisterPage,
        path: /^\/register$/,
        priority: 1,
    },
    {
        name: "Build Info",
        component: InfoPage,
        path: /^\/info$/,
    },
];
