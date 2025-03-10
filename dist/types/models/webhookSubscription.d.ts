import { Schema } from '../schema';
/**
 * Represents the details of a webhook subscription, including notification URL,
 * event types, and signature key.
 */
export interface WebhookSubscription {
    /** A Square-generated unique ID for the subscription. */
    id?: string;
    /** The name of this subscription. */
    name?: string | null;
    /** Indicates whether the subscription is enabled (`true`) or not (`false`). */
    enabled?: boolean | null;
    /** The event types associated with this subscription. */
    eventTypes?: string[] | null;
    /** The URL to which webhooks are sent. */
    notificationUrl?: string | null;
    /**
     * The API version of the subscription.
     * This field is optional for `CreateWebhookSubscription`.
     * The value defaults to the API version used by the application.
     */
    apiVersion?: string | null;
    /** The Square-generated signature key used to validate the origin of the webhook event. */
    signatureKey?: string;
    /** The timestamp of when the subscription was created, in RFC 3339 format. For example, "2016-09-04T23:59:33.123Z". */
    createdAt?: string;
    /**
     * The timestamp of when the subscription was last updated, in RFC 3339 format.
     * For example, "2016-09-04T23:59:33.123Z".
     */
    updatedAt?: string;
}
export declare const webhookSubscriptionSchema: Schema<WebhookSubscription>;
