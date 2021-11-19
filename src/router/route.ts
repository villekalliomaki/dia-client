import type { SvelteComponent } from "svelte";
import type { User, JwtClaims, RefreshToken } from "../generated/graphql";

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
    /** Path name to be matched. */
    path: RegExp;
    /**
     * If `null` is returned, allows route to be directed to.
     * Incase the user should not be allowed to see the route,
     * an alternative path is returned where the user is directed to.
     */
    guard?: (
        user?: User,
        jwt?: JwtClaims,
        refreshToken?: RefreshToken
    ) => string | null;
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
