import { Schema } from '../schema';
import { CheckoutOptions } from './checkoutOptions';
import { PrePopulatedData } from './prePopulatedData';
export interface PaymentLink {
    /** The Square-assigned ID of the payment link. */
    id?: string;
    /** The Square-assigned version number, which is incremented each time an update is committed to the payment link. */
    version: number;
    /**
     * The optional description of the `payment_link` object.
     * It is primarily for use by your application and is not used anywhere.
     */
    description?: string | null;
    /** The ID of the order associated with the payment link. */
    orderId?: string;
    checkoutOptions?: CheckoutOptions;
    /**
     * Describes buyer data to prepopulate in the payment form.
     * For more information,
     * see [Optional Checkout Configurations](https://developer.squareup.com/docs/checkout-api/optional-checkout-configurations).
     */
    prePopulatedData?: PrePopulatedData;
    /** The shortened URL of the payment link. */
    url?: string;
    /** The long URL of the payment link. */
    longUrl?: string;
    /** The timestamp when the payment link was created, in RFC 3339 format. */
    createdAt?: string;
    /** The timestamp when the payment link was last updated, in RFC 3339 format. */
    updatedAt?: string;
    /**
     * An optional note. After Square processes the payment, this note is added to the
     * resulting `Payment`.
     */
    paymentNote?: string | null;
}
export declare const paymentLinkSchema: Schema<PaymentLink>;
