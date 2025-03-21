import { Schema } from '../schema';
import { Address } from './address';
/** Information about the fulfillment recipient. */
export interface OrderFulfillmentRecipient {
    /**
     * The ID of the customer associated with the fulfillment.
     * If `customer_id` is provided, the fulfillment recipient's `display_name`,
     * `email_address`, and `phone_number` are automatically populated from the
     * targeted customer profile. If these fields are set in the request, the request
     * values override the information from the customer profile. If the
     * targeted customer profile does not contain the necessary information and
     * these fields are left unset, the request results in an error.
     */
    customerId?: string | null;
    /**
     * The display name of the fulfillment recipient. This field is required.
     * If provided, the display name overrides the corresponding customer profile value
     * indicated by `customer_id`.
     */
    displayName?: string | null;
    /**
     * The email address of the fulfillment recipient.
     * If provided, the email address overrides the corresponding customer profile value
     * indicated by `customer_id`.
     */
    emailAddress?: string | null;
    /**
     * The phone number of the fulfillment recipient. This field is required.
     * If provided, the phone number overrides the corresponding customer profile value
     * indicated by `customer_id`.
     */
    phoneNumber?: string | null;
    /**
     * Represents a postal address in a country.
     * For more information, see [Working with Addresses](https://developer.squareup.com/docs/build-basics/working-with-addresses).
     */
    address?: Address;
}
export declare const orderFulfillmentRecipientSchema: Schema<OrderFulfillmentRecipient>;
