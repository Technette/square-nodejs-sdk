import { array, lazy, object, optional } from '../schema';
import { errorSchema } from './error';
export const deleteCustomerCardResponseSchema = object({ errors: ['errors', optional(array(lazy(() => errorSchema)))] });
//# sourceMappingURL=deleteCustomerCardResponse.js.map