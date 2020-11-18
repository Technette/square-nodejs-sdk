import { array, lazy, object, optional, Schema } from '../schema';
import { Error, errorSchema } from './error';

/**
 * The return value from the
 * [CancelPaymentByIdempotencyKey](#endpoint-payments-cancelpaymentbyidempotencykey) endpoint.
 * On success, `errors` is empty.
 */
export interface CancelPaymentByIdempotencyKeyResponse {
  /** Any errors that occurred during the request. */
  errors?: Error[];
}

export const cancelPaymentByIdempotencyKeyResponseSchema: Schema<CancelPaymentByIdempotencyKeyResponse> = object(
  { errors: ['errors', optional(array(lazy(() => errorSchema)))] }
);
