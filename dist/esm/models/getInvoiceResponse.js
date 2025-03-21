import { array, lazy, object, optional } from '../schema';
import { errorSchema } from './error';
import { invoiceSchema } from './invoice';
export const getInvoiceResponseSchema = object({
    invoice: ['invoice', optional(lazy(() => invoiceSchema))],
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
});
//# sourceMappingURL=getInvoiceResponse.js.map