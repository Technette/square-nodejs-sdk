import { Schema } from '../schema';
import { Payment } from './payment';
/**
 * Describes a request to update a payment using
 * [UpdatePayment]($e/Payments/UpdatePayment).
 */
export interface UpdatePaymentRequest {
    /** Represents a payment processed by the Square API. */
    payment?: Payment;
    /**
     * A unique string that identifies this `UpdatePayment` request. Keys can be any valid string
     * but must be unique for every `UpdatePayment` request.
     * For more information, see [Idempotency](https://developer.squareup.com/docs/build-basics/common-api-patterns/idempotency).
     */
    idempotencyKey: string;
}
export declare const updatePaymentRequestSchema: Schema<UpdatePaymentRequest>;
