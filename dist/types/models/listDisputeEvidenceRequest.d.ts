import { Schema } from '../schema';
/** Defines the parameters for a `ListDisputeEvidence` request. */
export interface ListDisputeEvidenceRequest {
    /**
     * A pagination cursor returned by a previous call to this endpoint.
     * Provide this cursor to retrieve the next set of results for the original query.
     * For more information, see [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination).
     */
    cursor?: string | null;
}
export declare const listDisputeEvidenceRequestSchema: Schema<ListDisputeEvidenceRequest>;
