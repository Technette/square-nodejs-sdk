import { Schema } from '../schema';
import { InvoiceQuery } from './invoiceQuery';
/** Describes a `SearchInvoices` request. */
export interface SearchInvoicesRequest {
    /** Describes query criteria for searching invoices. */
    query: InvoiceQuery;
    /**
     * The maximum number of invoices to return (200 is the maximum `limit`).
     * If not provided, the server uses a default limit of 100 invoices.
     */
    limit?: number;
    /**
     * A pagination cursor returned by a previous call to this endpoint.
     * Provide this cursor to retrieve the next set of results for your original query.
     * For more information, see [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination).
     */
    cursor?: string;
}
export declare const searchInvoicesRequestSchema: Schema<SearchInvoicesRequest>;
