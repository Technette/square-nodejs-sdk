import { Schema } from '../schema';
import { CatalogCustomAttributeDefinitionSelectionConfigCustomAttributeSelection } from './catalogCustomAttributeDefinitionSelectionConfigCustomAttributeSelection';
/** Configuration associated with `SELECTION`-type custom attribute definitions. */
export interface CatalogCustomAttributeDefinitionSelectionConfig {
    /**
     * The maximum number of selections that can be set. The maximum value for this
     * attribute is 100. The default value is 1. The value can be modified, but changing the value will not
     * affect existing custom attribute values on objects. Clients need to
     * handle custom attributes with more selected values than allowed by this limit.
     */
    maxAllowedSelections?: number | null;
    /**
     * The set of valid `CatalogCustomAttributeSelections`. Up to a maximum of 100
     * selections can be defined. Can be modified.
     */
    allowedSelections?: CatalogCustomAttributeDefinitionSelectionConfigCustomAttributeSelection[] | null;
}
export declare const catalogCustomAttributeDefinitionSelectionConfigSchema: Schema<CatalogCustomAttributeDefinitionSelectionConfig>;
