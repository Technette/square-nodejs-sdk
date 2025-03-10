import { Schema } from '../schema';
import { Money } from './money';
export interface ShippingFee {
    /** The name for the shipping fee. */
    name?: string | null;
    /**
     * Represents an amount of money. `Money` fields can be signed or unsigned.
     * Fields that do not explicitly define whether they are signed or unsigned are
     * considered unsigned and can only hold positive amounts. For signed fields, the
     * sign of the value indicates the purpose of the money transfer. See
     * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
     * for more information.
     */
    charge: Money;
}
export declare const shippingFeeSchema: Schema<ShippingFee>;
