import { Schema } from '../schema';
/** Represents information about the application used to generate a change. */
export interface SourceApplication {
    /** Indicates the Square product used to generate a change. */
    product?: string;
    /**
     * __Read only__ The Square-assigned ID of the application. This field is used only if the
     * [product](entity:Product) type is `EXTERNAL_API`.
     */
    applicationId?: string | null;
    /**
     * __Read only__ The display name of the application
     * (for example, `"Custom Application"` or `"Square POS 4.74 for Android"`).
     */
    name?: string | null;
}
export declare const sourceApplicationSchema: Schema<SourceApplication>;
