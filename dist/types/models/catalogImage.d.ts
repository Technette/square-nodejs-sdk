import { Schema } from '../schema';
/**
 * An image file to use in Square catalogs. It can be associated with
 * `CatalogItem`, `CatalogItemVariation`, `CatalogCategory`, and `CatalogModifierList` objects.
 * Only the images on items and item variations are exposed in Dashboard.
 * Only the first image on an item is displayed in Square Point of Sale (SPOS).
 * Images on items and variations are displayed through Square Online Store.
 * Images on other object types are for use by 3rd party application developers.
 */
export interface CatalogImage {
    /**
     * The internal name to identify this image in calls to the Square API.
     * This is a searchable attribute for use in applicable query filters
     * using the [SearchCatalogObjects](api-endpoint:Catalog-SearchCatalogObjects).
     * It is not unique and should not be shown in a buyer facing context.
     */
    name?: string | null;
    /**
     * The URL of this image, generated by Square after an image is uploaded
     * using the [CreateCatalogImage](api-endpoint:Catalog-CreateCatalogImage) endpoint.
     * To modify the image, use the UpdateCatalogImage endpoint. Do not change the URL field.
     */
    url?: string | null;
    /**
     * A caption that describes what is shown in the image. Displayed in the
     * Square Online Store. This is a searchable attribute for use in applicable query filters
     * using the [SearchCatalogObjects](api-endpoint:Catalog-SearchCatalogObjects).
     */
    caption?: string | null;
    /** The immutable order ID for this image object created by the Photo Studio service in Square Online Store. */
    photoStudioOrderId?: string | null;
}
export declare const catalogImageSchema: Schema<CatalogImage>;
