import { Schema } from '../schema';
/** Describes receipt action fields. */
export interface ReceiptOptions {
    /** The reference to the Square payment ID for the receipt. */
    paymentId: string;
    /**
     * Instructs the device to print the receipt without displaying the receipt selection screen.
     * Requires `printer_enabled` set to true.
     * Defaults to false.
     */
    printOnly?: boolean | null;
    /**
     * Identify the receipt as a reprint rather than an original receipt.
     * Defaults to false.
     */
    isDuplicate?: boolean | null;
}
export declare const receiptOptionsSchema: Schema<ReceiptOptions>;
