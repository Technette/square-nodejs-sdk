import { Schema } from '../schema';
import { CustomerCustomAttributeFilter } from './customerCustomAttributeFilter';
/**
 * The custom attribute filters in a set of [customer filters]($m/CustomerFilter) used in a search query. Use this filter
 * to search based on [custom attributes]($m/CustomAttribute) that are assigned to customer profiles. For more information, see
 * [Search by custom attribute](https://developer.squareup.com/docs/customers-api/use-the-api/search-customers#search-by-custom-attribute).
 */
export interface CustomerCustomAttributeFilters {
    /**
     * The custom attribute filters. Each filter must specify `key` and include the `filter` field with a type-specific filter,
     * the `updated_at` field, or both. The provided keys must be unique within the list of custom attribute filters.
     */
    filters?: CustomerCustomAttributeFilter[] | null;
}
export declare const customerCustomAttributeFiltersSchema: Schema<CustomerCustomAttributeFilters>;
