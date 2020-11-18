import { array, lazy, object, optional, Schema, string } from '../schema';
import { Address, addressSchema } from './address';
import { Refund, refundSchema } from './refund';
import { Tender, tenderSchema } from './tender';

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
  locationId?: string;
  /** The timestamp for when the transaction was created, in RFC 3339 format. */
  createdAt?: string;
  /** The tenders used to pay in the transaction. */
  tenders?: Tender[];
  /** Refunds that have been applied to any tender in the transaction. */
  refunds?: Refund[];
  /**
   * If the transaction was created with the [Charge](#endpoint-charge)
   * endpoint, this value is the same as the value provided for the `reference_id`
   * parameter in the request to that endpoint. Otherwise, it is not set.
   */
  referenceId?: string;
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
  clientId?: string;
  /** Represents a physical address. */
  shippingAddress?: Address;
  /** The order_id is an identifier for the order associated with this transaction, if any. */
  orderId?: string;
}

export const transactionSchema: Schema<Transaction> = object({
  id: ['id', optional(string())],
  locationId: ['location_id', optional(string())],
  createdAt: ['created_at', optional(string())],
  tenders: ['tenders', optional(array(lazy(() => tenderSchema)))],
  refunds: ['refunds', optional(array(lazy(() => refundSchema)))],
  referenceId: ['reference_id', optional(string())],
  product: ['product', optional(string())],
  clientId: ['client_id', optional(string())],
  shippingAddress: ['shipping_address', optional(lazy(() => addressSchema))],
  orderId: ['order_id', optional(string())],
});
