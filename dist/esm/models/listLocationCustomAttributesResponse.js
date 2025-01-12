import { array, lazy, object, optional, string } from '../schema';
import { customAttributeSchema } from './customAttribute';
import { errorSchema } from './error';
export const listLocationCustomAttributesResponseSchema = object({
    customAttributes: [
        'custom_attributes',
        optional(array(lazy(() => customAttributeSchema))),
    ],
    cursor: ['cursor', optional(string())],
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
});
//# sourceMappingURL=listLocationCustomAttributesResponse.js.map