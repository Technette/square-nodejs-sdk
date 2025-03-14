import { Schema } from '../schema';
import { Error } from './error';
import { Invoice } from './invoice';
/** Describes a `PublishInvoice` response. */
export interface PublishInvoiceResponse {
    /**
     * Stores information about an invoice. You use the Invoices API to create and manage
     * invoices. For more information, see [Invoices API Overview](https://developer.squareup.com/docs/invoices-api/overview).
     */
    invoice?: Invoice;
    /** Information about errors encountered during the request. */
    errors?: Error[];
}
export declare const publishInvoiceResponseSchema: Schema<PublishInvoiceResponse>;
