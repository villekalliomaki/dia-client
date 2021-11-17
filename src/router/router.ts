import { get, writable, Subscriber, Unsubscriber, Updater } from "svelte/store";
import type Route from "./route";
import { routes } from "./routes";

/**
 * The app's router manages the current route, listeting to changes and changing the route.
 * Also a compliant Svelte store.
 */
export default class Router {
    constructor() {
        // Start with a null state, no nothing gets rendered.
        // Maybe replace with a loading route?
        const { subscribe, set, update } = writable<Route>(null);

        this.subscribe = subscribe;
        this.#set = set;
        this.#update = update;

        // Syncs the current path with the route state.
        // syncCurrentPath() can't be used since this instance is not yet initialized.
        this.toPath(window.location.pathname);

        // Listen to changes in the window's url and update the state on change.
        window.onpopstate = syncCurrentPath;
    }

    subscribe: (
        this: void,
        run: Subscriber<Route>,
        invalidate?: (value?: Route) => void
    ) => Unsubscriber;
    #set: (this: void, value: Route) => void;
    #update: (this: void, updater: Updater<Route>) => void;

    /**
     * Navigates to the current path in the url.
     * Used when first starting the app, or when syncing the router state with the url.
     */
    syncCurrentPath() {
        this.toPath(window.location.pathname);
    }

    /**
     * Sets the window's location to the new path.
     * The current path is pushed to the history stack.
     * */
    #replaceWindowPath(newPath: string) {
        window.history.pushState({}, "", window.location.origin + newPath);
    }

    /** Sets the tab's title formatted. */
    #setTitle(title: string) {
        document.title = `DIA - ${title}`;
    }

    /**
     * Matches the path with available routes and navigates to a matching destination.
     *
     * If multiple matches are present, falls back to the first one with a passing guard.
     * @param path The destination path, without the host or origin: `/home`.
     */
    toPath(path: string) {
        let pathMatches: Route[] = [];

        routes.forEach((route) => {
            // Test if the destination path matches.
            if (route.path.test(path)) {
                // If the match is found test a possible guard.
                if (route.guard != null) {
                    if (route.guard(true, 0, [])) {
                        throw new Error("User & login state not implemented");
                    }
                } else {
                    // No guard, allow
                    pathMatches.push(route);
                }
                // If the guard does not pass, the route is not added.
            }
        });

        // If no routes are found, redirect to 404.
        if (pathMatches.length < 1) {
            this.toPath("/404");
            return;
        }

        // Sort by priority
        pathMatches.sort((a, b) => {
            if (a.priority == null && b.priority == null) return 0;
            if (a.priority == null) return -1;
            if (b.priority == null) return 1;
            return a.priority - b.priority;
        });

        // Navigate to the best match
        this.setRoute(pathMatches[0], path);
    }

    /**
     * **Use with care.** `toPath` is recommended for normal navigation.
     * Sets the given route as the current one.
     *
     * Guards are not checked, unlike `toPath`.
     * The raw path is not matched against the routes Regex.
     *
     * The current window path is updated and the title is changed.
     * @param route Navigates to the given route.
     * @param rawPath The raw path appended to the
     */
    setRoute(route: Route, rawPath: string) {
        this.#setTitle(route.name);
        this.#replaceWindowPath(rawPath);

        this.#set(route);
    }

    /** Tests if the given route matches the current one. */
    matchesCurrent(path: string): boolean {
        return get<Route>(router).path.test(path);
    }
}

export const router = new Router();

/**
 * Includes all the parameters in the current url.
 */
export interface Parameters {
    pathParts: string[];
    queryParameters: object;
}

/**
 * This definition has to be after the router is initialized.
 * `this` in the listeter does not refer to the router, so this is used to refer
 * to the correct object.
 */
function syncCurrentPath() {
    router.syncCurrentPath();
}
