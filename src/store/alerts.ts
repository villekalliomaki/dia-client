import { writable, Updater, Subscriber, Unsubscriber } from "svelte/store";

/**
 * Nonessential options for alerts.
 * Enables prettier definitions as separated from the main data.
 */
export type AlertOptions = {
    /** If not null, sets the time in seconds after the alert automatically disappears. */
    closeIn?: number;
    /** Hides the manual close button. Null and false are equal here. */
    hideClose?: boolean;
    /** Low contrast alerts are less intrusive. Null and false are equal. */
    lowContrast?: boolean;
    /** The side of the window the alert is displayed on. */
    side?: "right" | "left";
    action?: {
        label: string;
        callback: (self: Alert) => void;
    };
};

/**
 * Alerts are displayed at the bottom right corner of the app, and in all views.
 */
export type Alert = {
    /** Title should in a few words describe the alert content.  */
    title: string;
    /** An optional subtitle for a more verbose description. */
    subtitle?: string;
    kind:
        | "error"
        | "info"
        | "info-square"
        | "success"
        | "warning"
        | "warning-alt";
} & AlertOptions;

/**
 * A store keeping track of the displayed alerts.
 */
export default class Alerts {
    constructor() {
        const { subscribe, set, update } = writable<Alert[]>([]);

        this.subscribe = subscribe;
        this.#set = set;
        this.#update = update;
    }

    subscribe: (
        this: void,
        run: Subscriber<Alert[]>,
        invalidate?: (value?: Alert[]) => void
    ) => Unsubscriber;
    #set: (this: void, value: Alert[]) => void;
    #update: (this: void, updater: Updater<Alert[]>) => void;

    /**
     * Deletes an alert in the store array without a delay.
     * @param del The alert deleted.
     */
    removeAlert(del: Alert) {
        this.#update((state) => {
            // Filter all the current alerts.
            return state.filter((alert) => {
                // Return items that are not the deleted.
                return !Object.is(alert, del);
            });
        });
    }

    /**
     * Delete the alert after the timeout.
     * @param del The deleted alert.
     */
    removeDelayed(del: Alert) {
        setTimeout(() => {
            this.removeAlert(del);
        }, del.closeIn * 1000);
    }

    /**
     * Deletes all alerts in the store.
     */
    clear() {
        this.#set([]);
    }

    /**
     * Adds a new alert to the end of the array.
     * The last item is at the bottom of the window.
     * @param alert The new alert.
     */
    addAlert(alert: Alert) {
        this.#update((state) => {
            // Add to the end
            return [...state, alert];
        });
    }

    /**
     * Creates a new error kind alert.
     * @param title The main title.
     * @param subtitle Optional description.
     * @param options Nonessential options.
     */
    error(title: string, subtitle?: string, options?: AlertOptions) {
        this.addAlert({
            title,
            subtitle,
            kind: "error",
            ...options,
        });
    }

    /**
     * Creates a new info kind alert.
     * @param title The main title.
     * @param subtitle Optional description.
     * @param options Nonessential options.
     */
    info(title: string, subtitle?: string, options?: AlertOptions) {
        this.addAlert({
            title,
            subtitle,
            kind: "info",
            ...options,
        });
    }

    /**
     * Creates a new warning kind alert.
     * @param title The main title.
     * @param subtitle Optional description.
     * @param options Nonessential options.
     */
    warning(title: string, subtitle?: string, options?: AlertOptions) {
        this.addAlert({
            title,
            subtitle,
            kind: "warning",
            ...options,
        });
    }

    /**
     * Creates a new success kind alert.
     * @param title The main title.
     * @param subtitle Optional description.
     * @param options Nonessential options.
     */
    success(title: string, subtitle?: string, options?: AlertOptions) {
        this.addAlert({
            title,
            subtitle,
            kind: "success",
            ...options,
        });
    }
}

export const alerts = new Alerts();
