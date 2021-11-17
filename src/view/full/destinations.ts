import type { SvelteComponent } from "svelte";

import Home16 from "carbon-icons-svelte/lib/Home16";
import Information16 from "carbon-icons-svelte/lib/Information16";

/** One destination displayed in the navigation components. */
export class Destination {
    constructor(
        name: string,
        targetPath: string,
        icon?: typeof SvelteComponent
    ) {
        this.name = name;
        this.targetPath = targetPath;
        this.icon = icon;
    }
    name: string;
    /** A static path the router navigates to on click. */
    targetPath: string;
    /** A Carbon icon used in the side navigation menu.  */
    icon?: typeof SvelteComponent;
}

/** A group of destinations, which will be grouped together in the navigation. */
export class DestinationGroup {
    constructor(
        name: string,
        destinations: Destination | Destination[],
        icon?: typeof SvelteComponent
    ) {
        this.name = name;
        this.icon = icon;
        this.destinations =
            destinations instanceof Destination ? [destinations] : destinations;
    }
    name: string;
    /** A Carbon icon used in the side navigation menu.  */
    icon?: typeof SvelteComponent;
    /** One or more destinations included in the group. */
    destinations: Destination[];
}

export const destinations: (Destination | DestinationGroup)[] = [
    new Destination("Home", "/", Home16),
    new Destination("Build info", "/info", Information16),
];
