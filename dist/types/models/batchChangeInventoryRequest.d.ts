import { Schema } from '../schema';
import { InventoryChange } from './inventoryChange';
export interface BatchChangeInventoryRequest {
    /**
     * A client-supplied, universally unique identifier (UUID) for the
     * request.
     * See [Idempotency](https://developer.squareup.com/docs/build-basics/common-api-patterns/idempotency) in the
     * [API Development 101](https://developer.squareup.com/docs/buildbasics) section for more
     * information.
     */
    idempotencyKey: string;
    /**
     * The set of physical counts and inventory adjustments to be made.
     * Changes are applied based on the client-supplied timestamp and may be sent
     * out of order.
     */
    changes?: InventoryChange[] | null;
    /**
     * Indicates whether the current physical count should be ignored if
     * the quantity is unchanged since the last physical count. Default: `true`.
     */
    ignoreUnchangedCounts?: boolean | null;
}
export declare const batchChangeInventoryRequestSchema: Schema<BatchChangeInventoryRequest>;
