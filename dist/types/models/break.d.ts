import { Schema } from '../schema';
/** A record of an employee's break during a shift. */
export interface Break {
    /** The UUID for this object. */
    id?: string;
    /**
     * RFC 3339; follows the same timezone information as `Shift`. Precision up to
     * the minute is respected; seconds are truncated.
     */
    startAt: string;
    /**
     * RFC 3339; follows the same timezone information as `Shift`. Precision up to
     * the minute is respected; seconds are truncated.
     */
    endAt?: string | null;
    /** The `BreakType` that this `Break` was templated on. */
    breakTypeId: string;
    /** A human-readable name. */
    name: string;
    /**
     * Format: RFC-3339 P[n]Y[n]M[n]DT[n]H[n]M[n]S. The expected length of
     * the break.
     */
    expectedDuration: string;
    /**
     * Whether this break counts towards time worked for compensation
     * purposes.
     */
    isPaid: boolean;
}
export declare const breakSchema: Schema<Break>;
