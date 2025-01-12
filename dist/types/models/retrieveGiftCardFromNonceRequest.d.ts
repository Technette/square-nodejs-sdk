import { Schema } from '../schema';
/** A request to retrieve a gift card by using a payment token. */
export interface RetrieveGiftCardFromNonceRequest {
    /**
     * The payment token of the gift card to retrieve. Payment tokens are generated by the
     * Web Payments SDK or In-App Payments SDK.
     */
    nonce: string;
}
export declare const retrieveGiftCardFromNonceRequestSchema: Schema<RetrieveGiftCardFromNonceRequest>;
