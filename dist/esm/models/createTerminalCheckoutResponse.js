import { array, lazy, object, optional } from '../schema';
import { errorSchema } from './error';
import { terminalCheckoutSchema } from './terminalCheckout';
export const createTerminalCheckoutResponseSchema = object({
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    checkout: ['checkout', optional(lazy(() => terminalCheckoutSchema))],
});
//# sourceMappingURL=createTerminalCheckoutResponse.js.map