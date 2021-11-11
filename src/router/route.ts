import type { SvelteComponent } from "svelte";

/**
 * Route describes a path to component relation.
 * Guards ensure that the user has correct permissions to view the content,
 * so no inaccessible pages are shown.
 * Routes with a higher priority are chosen in case of a conflicting path match.
 */
export default interface Route {
    component: typeof SvelteComponent;
    /**  Name of the route. Shows in tab name, and in some cases in the view's title. */
    name: string;
    /**
     * Path name to be matched.
     */
    path: RegExp;
    /**
     * Returns ´true´ if user is allowed to open the route.
     * In the future will be replaced with a single user object.
     */
    guard?: (
        loggedIn: boolean,
        permissionLevel: number,
        groups: string[]
    ) => boolean;
    /**
     * The priority is used when multiple routes are matched.
     * Higher priority routes are chosen first, and `null` at last.
     */
    priority?: number;
    /**
     * Describes which positions in the path are parameters.
     * Parameters are retrieved from the routes store.
     * 
     * Number is the location of the parameter from the left starting from 0.
     * 
     * String is the name it is retrieved with.
     */
    pathParameters?: Map<number, string>;
}
