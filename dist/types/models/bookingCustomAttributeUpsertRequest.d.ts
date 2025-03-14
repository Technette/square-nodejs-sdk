import { Schema } from '../schema';
import { CustomAttribute } from './customAttribute';
/**
 * Represents an individual upsert request in a [BulkUpsertBookingCustomAttributes]($e/BookingCustomAttributes/BulkUpsertBookingCustomAttributes)
 * request. An individual request contains a booking ID, the custom attribute to create or update,
 * and an optional idempotency key.
 */
export interface BookingCustomAttributeUpsertRequest {
    /** The ID of the target [booking](entity:Booking). */
    bookingId: string;
    /**
     * A custom attribute value. Each custom attribute value has a corresponding
     * `CustomAttributeDefinition` object.
     */
    customAttribute: CustomAttribute;
    /**
     * A unique identifier for this individual upsert request, used to ensure idempotency.
     * For more information, see [Idempotency](https://developer.squareup.com/docs/build-basics/common-api-patterns/idempotency).
     */
    idempotencyKey?: string | null;
}
export declare const bookingCustomAttributeUpsertRequestSchema: Schema<BookingCustomAttributeUpsertRequest>;
