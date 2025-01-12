import { Schema } from '../schema';
/** The query filter to return the search result whose named attribute values fall between the specified range. */
export interface CatalogQueryRange {
    /** The name of the attribute to be searched. */
    attributeName: string;
    /** The desired minimum value for the search attribute (inclusive). */
    attributeMinValue?: bigint | null;
    /** The desired maximum value for the search attribute (inclusive). */
    attributeMaxValue?: bigint | null;
}
export declare const catalogQueryRangeSchema: Schema<CatalogQueryRange>;
