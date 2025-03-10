import { Schema } from '../schema';
export interface ListDevicesRequest {
    /**
     * A pagination cursor returned by a previous call to this endpoint.
     * Provide this cursor to retrieve the next set of results for the original query.
     * See [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination) for more information.
     */
    cursor?: string | null;
    /** The order (e.g., chronological or alphabetical) in which results from a request are returned. */
    sortOrder?: string;
    /** The number of results to return in a single page. */
    limit?: number | null;
    /** If present, only returns devices at the target location. */
    locationId?: string | null;
}
export declare const listDevicesRequestSchema: Schema<ListDevicesRequest>;
