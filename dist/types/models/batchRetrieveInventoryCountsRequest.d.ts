import { Schema } from '../schema';
export interface BatchRetrieveInventoryCountsRequest {
    /**
     * The filter to return results by `CatalogObject` ID.
     * The filter is applicable only when set.  The default is null.
     */
    catalogObjectIds?: string[] | null;
    /**
     * The filter to return results by `Location` ID.
     * This filter is applicable only when set. The default is null.
     */
    locationIds?: string[] | null;
    /**
     * The filter to return results with their `calculated_at` value
     * after the given time as specified in an RFC 3339 timestamp.
     * The default value is the UNIX epoch of (`1970-01-01T00:00:00Z`).
     */
    updatedAfter?: string | null;
    /**
     * A pagination cursor returned by a previous call to this endpoint.
     * Provide this to retrieve the next set of results for the original query.
     * See the [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination) guide for more information.
     */
    cursor?: string | null;
    /**
     * The filter to return results by `InventoryState`. The filter is only applicable when set.
     * Ignored are untracked states of `NONE`, `SOLD`, and `UNLINKED_RETURN`.
     * The default is null.
     */
    states?: string[] | null;
    /** The number of [records](entity:InventoryCount) to return. */
    limit?: number | null;
}
export declare const batchRetrieveInventoryCountsRequestSchema: Schema<BatchRetrieveInventoryCountsRequest>;
