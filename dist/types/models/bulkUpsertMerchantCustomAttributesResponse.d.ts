import { Schema } from '../schema';
import { BulkUpsertMerchantCustomAttributesResponseMerchantCustomAttributeUpsertResponse } from './bulkUpsertMerchantCustomAttributesResponseMerchantCustomAttributeUpsertResponse';
import { Error } from './error';
/**
 * Represents a [BulkUpsertMerchantCustomAttributes]($e/MerchantCustomAttributes/BulkUpsertMerchantCustomAttributes) response,
 * which contains a map of responses that each corresponds to an individual upsert request.
 */
export interface BulkUpsertMerchantCustomAttributesResponse {
    /**
     * A map of responses that correspond to individual upsert requests. Each response has the
     * same ID as the corresponding request and contains either a `merchant_id` and `custom_attribute` or an `errors` field.
     */
    values?: Record<string, BulkUpsertMerchantCustomAttributesResponseMerchantCustomAttributeUpsertResponse>;
    /** Any errors that occurred during the request. */
    errors?: Error[];
}
export declare const bulkUpsertMerchantCustomAttributesResponseSchema: Schema<BulkUpsertMerchantCustomAttributesResponse>;
