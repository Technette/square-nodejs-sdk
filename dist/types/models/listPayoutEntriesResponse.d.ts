import { Schema } from '../schema';
import { Error } from './error';
import { PayoutEntry } from './payoutEntry';
/** The response to retrieve payout records entries. */
export interface ListPayoutEntriesResponse {
    /** The requested list of payout entries, ordered with the given or default sort order. */
    payoutEntries?: PayoutEntry[];
    /**
     * The pagination cursor to be used in a subsequent request. If empty, this is the final response.
     * For more information, see [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination).
     */
    cursor?: string;
    /** Information about errors encountered during the request. */
    errors?: Error[];
}
export declare const listPayoutEntriesResponseSchema: Schema<ListPayoutEntriesResponse>;
