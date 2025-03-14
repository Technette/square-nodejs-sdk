import { Schema } from '../schema';
import { AppointmentSegment } from './appointmentSegment';
import { BookingCreatorDetails } from './bookingCreatorDetails';
/**
 * Represents a booking as a time-bound service contract for a seller's staff member to provide a specified service
 * at a given location to a requesting customer in one or more appointment segments.
 */
export interface Booking {
    /** A unique ID of this object representing a booking. */
    id?: string;
    /** The revision number for the booking used for optimistic concurrency. */
    version?: number;
    /** Supported booking statuses. */
    status?: string;
    /** The RFC 3339 timestamp specifying the creation time of this booking. */
    createdAt?: string;
    /** The RFC 3339 timestamp specifying the most recent update time of this booking. */
    updatedAt?: string;
    /** The RFC 3339 timestamp specifying the starting time of this booking. */
    startAt?: string | null;
    /** The ID of the [Location](entity:Location) object representing the location where the booked service is provided. Once set when the booking is created, its value cannot be changed. */
    locationId?: string | null;
    /** The ID of the [Customer](entity:Customer) object representing the customer receiving the booked service. */
    customerId?: string | null;
    /** The free-text field for the customer to supply notes about the booking. For example, the note can be preferences that cannot be expressed by supported attributes of a relevant [CatalogObject](entity:CatalogObject) instance. */
    customerNote?: string | null;
    /**
     * The free-text field for the seller to supply notes about the booking. For example, the note can be preferences that cannot be expressed by supported attributes of a specific [CatalogObject](entity:CatalogObject) instance.
     * This field should not be visible to customers.
     */
    sellerNote?: string | null;
    /** A list of appointment segments for this booking. */
    appointmentSegments?: AppointmentSegment[] | null;
    /**
     * Additional time at the end of a booking.
     * Applications should not make this field visible to customers of a seller.
     */
    transitionTimeMinutes?: number;
    /** Whether the booking is of a full business day. */
    allDay?: boolean;
    /** Supported types of location where service is provided. */
    locationType?: string;
    /** Information about a booking creator. */
    creatorDetails?: BookingCreatorDetails;
    /** Supported sources a booking was created from. */
    source?: string;
}
export declare const bookingSchema: Schema<Booking>;
