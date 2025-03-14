import { array, lazy, object, optional, string } from '../schema';
import { errorSchema } from './error';
import { eventTypeMetadataSchema } from './eventTypeMetadata';
export const listWebhookEventTypesResponseSchema = object({
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    eventTypes: ['event_types', optional(array(string()))],
    metadata: [
        'metadata',
        optional(array(lazy(() => eventTypeMetadataSchema))),
    ],
});
//# sourceMappingURL=listWebhookEventTypesResponse.js.map