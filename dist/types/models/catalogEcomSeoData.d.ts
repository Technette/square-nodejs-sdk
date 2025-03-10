import { Schema } from '../schema';
/** SEO data for for a seller's Square Online store. */
export interface CatalogEcomSeoData {
    /** The SEO title used for the Square Online store. */
    pageTitle?: string | null;
    /** The SEO description used for the Square Online store. */
    pageDescription?: string | null;
    /** The SEO permalink used for the Square Online store. */
    permalink?: string | null;
}
export declare const catalogEcomSeoDataSchema: Schema<CatalogEcomSeoData>;
