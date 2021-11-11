import { writable } from "svelte/store";
import type { CarbonTheme } from "carbon-components-svelte/types/Theme/Theme.svelte";

export const theme = writable<CarbonTheme>(
    (localStorage.getItem("theme") as CarbonTheme) || "g100"
);
