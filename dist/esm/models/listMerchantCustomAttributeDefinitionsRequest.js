import { nullable, number, object, optional, string } from '../schema';
export const listMerchantCustomAttributeDefinitionsRequestSchema = object({
    visibilityFilter: ['visibility_filter', optional(string())],
    limit: ['limit', optional(nullable(number()))],
    cursor: ['cursor', optional(nullable(string()))],
});
//# sourceMappingURL=listMerchantCustomAttributeDefinitionsRequest.js.map