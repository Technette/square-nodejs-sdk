import { Schema } from '../schema';
export interface ListEmployeesRequest {
    locationId?: string | null;
    /**
     * The status of the Employee being retrieved.
     * DEPRECATED at version 2020-08-26. Replaced by [TeamMemberStatus](entity:TeamMemberStatus).
     */
    status?: string;
    /** The number of employees to be returned on each page. */
    limit?: number | null;
    /** The token required to retrieve the specified page of results. */
    cursor?: string | null;
}
export declare const listEmployeesRequestSchema: Schema<ListEmployeesRequest>;
