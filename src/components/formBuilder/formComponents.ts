export type FieldKind = Text;

/**
 * The base fields that every form field must include.
 */
export type BaseField = {
    name: string;
    label: string;
    /** 
     * Doesn't exist on all types of fields.
     * Used to instruct about allowed input content.
     */
    helperText?: string;
    /** TODO: When to show the input. */
    guard?: () => boolean;
    validator?: (value) => string | null;
    value: any;
};

/** One row text field. */
export type Text = BaseField & {
    optional: true;
};

/** Number input */
export type Number = BaseField & {
    min: number;
    max: number;
    step: number;
}