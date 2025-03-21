import { Schema } from '../schema';
import { Error } from './error';
/**
 * Defines the fields that are included in the response body of
 * a request to the [UpdateWebhookSubscriptionSignatureKey]($e/WebhookSubscriptions/UpdateWebhookSubscriptionSignatureKey) endpoint.
 * Note: If there are errors processing the request, the [Subscription]($m/WebhookSubscription) is not
 * present.
 */
export interface UpdateWebhookSubscriptionSignatureKeyResponse {
    /** Information on errors encountered during the request. */
    errors?: Error[];
    /** The new Square-generated signature key used to validate the origin of the webhook event. */
    signatureKey?: string;
}
export declare const updateWebhookSubscriptionSignatureKeyResponseSchema: Schema<UpdateWebhookSubscriptionSignatureKeyResponse>;
