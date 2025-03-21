import { array, lazy, object, optional } from '../schema';
import { customAttributeSchema } from './customAttribute';
import { errorSchema } from './error';
export const upsertOrderCustomAttributeResponseSchema = object({
    customAttribute: [
        'custom_attribute',
        optional(lazy(() => customAttributeSchema)),
    ],
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
});
//# sourceMappingURL=upsertOrderCustomAttributeResponse.js.map