import { Schema } from '../schema';
/** The query expression to specify the key to sort search results. */
export interface CatalogQuerySortedAttribute {
    /** The attribute whose value is used as the sort key. */
    attributeName: string;
    /**
     * The first attribute value to be returned by the query. Ascending sorts will return only
     * objects with this value or greater, while descending sorts will return only objects with this value
     * or less. If unset, start at the beginning (for ascending sorts) or end (for descending sorts).
     */
    initialAttributeValue?: string | null;
    /** The order (e.g., chronological or alphabetical) in which results from a request are returned. */
    sortOrder?: string;
}
export declare const catalogQuerySortedAttributeSchema: Schema<CatalogQuerySortedAttribute>;
