import { Schema } from '../schema';
import { OrderFulfillmentRecipient } from './orderFulfillmentRecipient';
/** Contains the details necessary to fulfill a shipment order. */
export interface OrderFulfillmentShipmentDetails {
    /** Information about the fulfillment recipient. */
    recipient?: OrderFulfillmentRecipient;
    /** The shipping carrier being used to ship this fulfillment (such as UPS, FedEx, or USPS). */
    carrier?: string | null;
    /** A note with additional information for the shipping carrier. */
    shippingNote?: string | null;
    /**
     * A description of the type of shipping product purchased from the carrier
     * (such as First Class, Priority, or Express).
     */
    shippingType?: string | null;
    /** The reference number provided by the carrier to track the shipment's progress. */
    trackingNumber?: string | null;
    /** A link to the tracking webpage on the carrier's website. */
    trackingUrl?: string | null;
    /**
     * The [timestamp](https://developer.squareup.com/docs/build-basics/working-with-dates)
     * indicating when the shipment was requested. The timestamp must be in RFC 3339 format
     * (for example, "2016-09-04T23:59:33.123Z").
     */
    placedAt?: string;
    /**
     * The [timestamp](https://developer.squareup.com/docs/build-basics/working-with-dates)
     * indicating when this fulfillment was moved to the `RESERVED` state, which  indicates that preparation
     * of this shipment has begun. The timestamp must be in RFC 3339 format (for example, "2016-09-04T23:59:33.123Z").
     */
    inProgressAt?: string;
    /**
     * The [timestamp](https://developer.squareup.com/docs/build-basics/working-with-dates)
     * indicating when this fulfillment was moved to the `PREPARED` state, which indicates that the
     * fulfillment is packaged. The timestamp must be in RFC 3339 format (for example, "2016-09-04T23:59:33.123Z").
     */
    packagedAt?: string;
    /**
     * The [timestamp](https://developer.squareup.com/docs/build-basics/working-with-dates)
     * indicating when the shipment is expected to be delivered to the shipping carrier.
     * The timestamp must be in RFC 3339 format (for example, "2016-09-04T23:59:33.123Z").
     */
    expectedShippedAt?: string | null;
    /**
     * The [timestamp](https://developer.squareup.com/docs/build-basics/working-with-dates)
     * indicating when this fulfillment was moved to the `COMPLETED` state, which indicates that
     * the fulfillment has been given to the shipping carrier. The timestamp must be in RFC 3339 format
     * (for example, "2016-09-04T23:59:33.123Z").
     */
    shippedAt?: string;
    /**
     * The [timestamp](https://developer.squareup.com/docs/build-basics/working-with-dates)
     * indicating the shipment was canceled.
     * The timestamp must be in RFC 3339 format (for example, "2016-09-04T23:59:33.123Z").
     */
    canceledAt?: string | null;
    /** A description of why the shipment was canceled. */
    cancelReason?: string | null;
    /**
     * The [timestamp](https://developer.squareup.com/docs/build-basics/working-with-dates)
     * indicating when the shipment failed to be completed. The timestamp must be in RFC 3339 format
     * (for example, "2016-09-04T23:59:33.123Z").
     */
    failedAt?: string;
    /** A description of why the shipment failed to be completed. */
    failureReason?: string | null;
}
export declare const orderFulfillmentShipmentDetailsSchema: Schema<OrderFulfillmentShipmentDetails>;
