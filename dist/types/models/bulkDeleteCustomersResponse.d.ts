import { Schema } from '../schema';
import { DeleteCustomerResponse } from './deleteCustomerResponse';
import { Error } from './error';
/**
 * Defines the fields included in the response body from the
 * [BulkDeleteCustomers]($e/Customers/BulkDeleteCustomers) endpoint.
 */
export interface BulkDeleteCustomersResponse {
    /**
     * A map of responses that correspond to individual delete requests, represented by
     * key-value pairs.
     * Each key is the customer ID that was specified for a delete request and each value
     * is the corresponding response.
     * If the request succeeds, the value is an empty object (`{ }`).
     * If the request fails, the value contains any errors that occurred during the request.
     */
    responses?: Record<string, DeleteCustomerResponse>;
    /** Any top-level errors that prevented the bulk operation from running. */
    errors?: Error[];
}
export declare const bulkDeleteCustomersResponseSchema: Schema<BulkDeleteCustomersResponse>;
