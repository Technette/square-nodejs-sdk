import { Schema } from '../schema';
import { Address } from './address';
import { Refund } from './refund';
import { Tender } from './tender';
/**
 * Represents a transaction processed with Square, either with the
 * Connect API or with Square Point of Sale.
 * The `tenders` field of this object lists all methods of payment used to pay in
 * the transaction.
 */
export interface Transaction {
    /** The transaction's unique ID, issued by Square payments servers. */
    id?: string;
    /** The ID of the transaction's associated location. */
    locationId?: string | null;
    /** The timestamp for when the transaction was created, in RFC 3339 format. */
    createdAt?: string;
    /** The tenders used to pay in the transaction. */
    tenders?: Tender[] | null;
    /** Refunds that have been applied to any tender in the transaction. */
    refunds?: Refund[] | null;
    /**
     * If the transaction was created with the [Charge](api-endpoint:Transactions-Charge)
     * endpoint, this value is the same as the value provided for the `reference_id`
     * parameter in the request to that endpoint. Otherwise, it is not set.
     */
    referenceId?: string | null;
    /** Indicates the Square product used to process a transaction. */
    product?: string;
    /**
     * If the transaction was created in the Square Point of Sale app, this value
     * is the ID generated for the transaction by Square Point of Sale.
     * This ID has no relationship to the transaction's canonical `id`, which is
     * generated by Square's backend servers. This value is generated for bookkeeping
     * purposes, in case the transaction cannot immediately be completed (for example,
     * if the transaction is processed in offline mode).
     * It is not currently possible with the Connect API to perform a transaction
     * lookup by this value.
     */
    clientId?: string | null;
    /**
     * Represents a postal address in a country.
     * For more information, see [Working with Addresses](https://developer.squareup.com/docs/build-basics/working-with-addresses).
     */
    shippingAddress?: Address;
    /** The order_id is an identifier for the order associated with this transaction, if any. */
    orderId?: string | null;
}
export declare const transactionSchema: Schema<Transaction>;
