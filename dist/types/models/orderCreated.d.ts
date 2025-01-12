import { Schema } from '../schema';
export interface OrderCreated {
    /** The order's unique ID. */
    orderId?: string | null;
    /**
     * The version number, which is incremented each time an update is committed to the order.
     * Orders that were not created through the API do not include a version number and
     * therefore cannot be updated.
     * [Read more about working with versions.](https://developer.squareup.com/docs/orders-api/manage-orders/update-orders)
     */
    version?: number;
    /** The ID of the seller location that this order is associated with. */
    locationId?: string | null;
    /** The state of the order. */
    state?: string;
    /** The timestamp for when the order was created, in RFC 3339 format. */
    createdAt?: string;
}
export declare const orderCreatedSchema: Schema<OrderCreated>;
