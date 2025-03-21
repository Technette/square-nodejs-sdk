import { Schema } from '../schema';
/** Dietary preferences that can be assigned to an `FOOD_AND_BEV` item and its ingredients. */
export interface CatalogItemFoodAndBeverageDetailsDietaryPreference {
    /** The type of dietary preference for the `FOOD_AND_BEV` type of items and integredients. */
    type?: string;
    /** Standard dietary preferences for food and beverage items that are recommended on item creation. */
    standardName?: string;
    /** The name of a user-defined custom dietary preference. This should be null if it's a standard dietary preference. */
    customName?: string | null;
}
export declare const catalogItemFoodAndBeverageDetailsDietaryPreferenceSchema: Schema<CatalogItemFoodAndBeverageDetailsDietaryPreference>;
