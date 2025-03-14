import { Schema } from '../schema';
/**
 * A `CatalogItemOptionValue` links an item variation to an item option as
 * an item option value. For example, a t-shirt item may offer a color option and
 * a size option. An item option value would represent each variation of t-shirt:
 * For example, "Color:Red, Size:Small" or "Color:Blue, Size:Medium".
 */
export interface CatalogItemOptionValueForItemVariation {
    /** The unique id of an item option. */
    itemOptionId?: string | null;
    /** The unique id of the selected value for the item option. */
    itemOptionValueId?: string | null;
}
export declare const catalogItemOptionValueForItemVariationSchema: Schema<CatalogItemOptionValueForItemVariation>;
