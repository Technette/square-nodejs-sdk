import { Schema } from '../schema';
import { Error } from './error';
import { EventTypeMetadata } from './eventTypeMetadata';
/**
 * Defines the fields that are included in the response body of
 * a request to the [ListWebhookEventTypes]($e/WebhookSubscriptions/ListWebhookEventTypes) endpoint.
 * Note: if there are errors processing the request, the event types field will not be
 * present.
 */
export interface ListWebhookEventTypesResponse {
    /** Information on errors encountered during the request. */
    errors?: Error[];
    /** The list of event types. */
    eventTypes?: string[];
    /** Contains the metadata of a webhook event type. For more information, see [EventTypeMetadata](entity:EventTypeMetadata). */
    metadata?: EventTypeMetadata[];
}
export declare const listWebhookEventTypesResponseSchema: Schema<ListWebhookEventTypesResponse>;
