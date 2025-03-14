import { Schema } from '../schema';
import { ShiftWorkday } from './shiftWorkday';
import { TimeRange } from './timeRange';
/**
 * Defines a filter used in a search for `Shift` records. `AND` logic is
 * used by Square's servers to apply each filter property specified.
 */
export interface ShiftFilter {
    /** Fetch shifts for the specified location. */
    locationIds?: string[] | null;
    /** Fetch shifts for the specified employees. DEPRECATED at version 2020-08-26. Use `team_member_ids` instead. */
    employeeIds?: string[] | null;
    /** Specifies the `status` of `Shift` records to be returned. */
    status?: string;
    /**
     * Represents a generic time range. The start and end values are
     * represented in RFC 3339 format. Time ranges are customized to be
     * inclusive or exclusive based on the needs of a particular endpoint.
     * Refer to the relevant endpoint-specific documentation to determine
     * how time ranges are handled.
     */
    start?: TimeRange;
    /**
     * Represents a generic time range. The start and end values are
     * represented in RFC 3339 format. Time ranges are customized to be
     * inclusive or exclusive based on the needs of a particular endpoint.
     * Refer to the relevant endpoint-specific documentation to determine
     * how time ranges are handled.
     */
    end?: TimeRange;
    /**
     * A `Shift` search query filter parameter that sets a range of days that
     * a `Shift` must start or end in before passing the filter condition.
     */
    workday?: ShiftWorkday;
    /** Fetch shifts for the specified team members. Replaced `employee_ids` at version "2020-08-26". */
    teamMemberIds?: string[] | null;
}
export declare const shiftFilterSchema: Schema<ShiftFilter>;
