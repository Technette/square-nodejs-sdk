import { Schema } from '../schema';
import { CustomAttributeDefinition } from './customAttributeDefinition';
/** Represents an [UpdateMerchantCustomAttributeDefinition]($e/MerchantCustomAttributes/UpdateMerchantCustomAttributeDefinition) request. */
export interface UpdateMerchantCustomAttributeDefinitionRequest {
    /**
     * Represents a definition for custom attribute values. A custom attribute definition
     * specifies the key, visibility, schema, and other properties for a custom attribute.
     */
    customAttributeDefinition: CustomAttributeDefinition;
    /**
     * A unique identifier for this request, used to ensure idempotency. For more information,
     * see [Idempotency](https://developer.squareup.com/docs/build-basics/common-api-patterns/idempotency).
     */
    idempotencyKey?: string | null;
}
export declare const updateMerchantCustomAttributeDefinitionRequestSchema: Schema<UpdateMerchantCustomAttributeDefinitionRequest>;
