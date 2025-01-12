import { Schema } from '../schema';
import { Error } from './error';
import { Subscription } from './subscription';
/**
 * Defines output parameters in a response from the
 * [UpdateSubscription]($e/Subscriptions/UpdateSubscription) endpoint.
 */
export interface UpdateSubscriptionResponse {
    /** Errors encountered during the request. */
    errors?: Error[];
    /**
     * Represents a subscription purchased by a customer.
     * For more information, see
     * [Manage Subscriptions](https://developer.squareup.com/docs/subscriptions-api/manage-subscriptions).
     */
    subscription?: Subscription;
}
export declare const updateSubscriptionResponseSchema: Schema<UpdateSubscriptionResponse>;
