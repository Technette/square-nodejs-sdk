import { Schema } from '../schema';
/** Describes query filters to apply. */
export interface InvoiceFilter {
    /**
     * Limits the search to the specified locations. A location is required.
     * In the current implementation, only one location can be specified.
     */
    locationIds: string[];
    /**
     * Limits the search to the specified customers, within the specified locations.
     * Specifying a customer is optional. In the current implementation,
     * a maximum of one customer can be specified.
     */
    customerIds?: string[] | null;
}
export declare const invoiceFilterSchema: Schema<InvoiceFilter>;
