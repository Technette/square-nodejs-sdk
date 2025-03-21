import { Schema } from '../schema';
/** Fields to describe the action that displays QR-Codes. */
export interface QrCodeOptions {
    /** The title text to display in the QR code flow on the Terminal. */
    title: string;
    /** The body text to display in the QR code flow on the Terminal. */
    body: string;
    /**
     * The text representation of the data to show in the QR code
     * as UTF8-encoded data.
     */
    barcodeContents: string;
}
export declare const qrCodeOptionsSchema: Schema<QrCodeOptions>;
