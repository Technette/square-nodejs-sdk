import { Schema } from '../schema';
import { CustomerAddressFilter } from './customerAddressFilter';
import { CustomerTextFilter } from './customerTextFilter';
import { FilterValue } from './filterValue';
import { FloatNumberRange } from './floatNumberRange';
import { TimeRange } from './timeRange';
/**
 * A type-specific filter used in a [custom attribute filter]($m/CustomerCustomAttributeFilter) to search based on the value
 * of a customer-related [custom attribute]($m/CustomAttribute).
 */
export interface CustomerCustomAttributeFilterValue {
    /**
     * A filter to select customers based on exact or fuzzy matching of
     * customer attributes against a specified query. Depending on the customer attributes,
     * the filter can be case-sensitive. This filter can be exact or fuzzy, but it cannot be both.
     */
    email?: CustomerTextFilter;
    /**
     * A filter to select customers based on exact or fuzzy matching of
     * customer attributes against a specified query. Depending on the customer attributes,
     * the filter can be case-sensitive. This filter can be exact or fuzzy, but it cannot be both.
     */
    phone?: CustomerTextFilter;
    /**
     * A filter to select customers based on exact or fuzzy matching of
     * customer attributes against a specified query. Depending on the customer attributes,
     * the filter can be case-sensitive. This filter can be exact or fuzzy, but it cannot be both.
     */
    text?: CustomerTextFilter;
    /**
     * A filter to select resources based on an exact field value. For any given
     * value, the value can only be in one property. Depending on the field, either
     * all properties can be set or only a subset will be available.
     * Refer to the documentation of the field.
     */
    selection?: FilterValue;
    /**
     * Represents a generic time range. The start and end values are
     * represented in RFC 3339 format. Time ranges are customized to be
     * inclusive or exclusive based on the needs of a particular endpoint.
     * Refer to the relevant endpoint-specific documentation to determine
     * how time ranges are handled.
     */
    date?: TimeRange;
    /** Specifies a decimal number range. */
    number?: FloatNumberRange;
    /** A filter for a query based on the value of a `Boolean`-type custom attribute. */
    mBoolean?: boolean | null;
    /**
     * The customer address filter. This filter is used in a [CustomerCustomAttributeFilterValue]($m/CustomerCustomAttributeFilterValue) filter when
     * searching by an `Address`-type custom attribute.
     */
    address?: CustomerAddressFilter;
}
export declare const customerCustomAttributeFilterValueSchema: Schema<CustomerCustomAttributeFilterValue>;
