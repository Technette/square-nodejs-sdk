import { Schema } from '../schema';
/**
 * Represents a group of customer profiles.
 * Customer groups can be created, be modified, and have their membership defined using
 * the Customers API or within the Customer Directory in the Square Seller Dashboard or Point of Sale.
 */
export interface CustomerGroup {
    /** A unique Square-generated ID for the customer group. */
    id?: string;
    /** The name of the customer group. */
    name: string;
    /** The timestamp when the customer group was created, in RFC 3339 format. */
    createdAt?: string;
    /** The timestamp when the customer group was last updated, in RFC 3339 format. */
    updatedAt?: string;
}
export declare const customerGroupSchema: Schema<CustomerGroup>;
