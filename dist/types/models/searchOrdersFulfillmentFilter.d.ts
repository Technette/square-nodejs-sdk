import { Schema } from '../schema';
/** Filter based on [order fulfillment]($m/Fulfillment) information. */
export interface SearchOrdersFulfillmentFilter {
    /**
     * A list of [fulfillment types](entity:FulfillmentType) to filter
     * for. The list returns orders if any of its fulfillments match any of the fulfillment types
     * listed in this field.
     * See [FulfillmentType](#type-fulfillmenttype) for possible values
     */
    fulfillmentTypes?: string[] | null;
    /**
     * A list of [fulfillment states](entity:FulfillmentState) to filter
     * for. The list returns orders if any of its fulfillments match any of the
     * fulfillment states listed in this field.
     * See [FulfillmentState](#type-fulfillmentstate) for possible values
     */
    fulfillmentStates?: string[] | null;
}
export declare const searchOrdersFulfillmentFilterSchema: Schema<SearchOrdersFulfillmentFilter>;
