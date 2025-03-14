import { Schema } from '../schema';
export interface PaymentBalanceActivityFeeDetail {
    /**
     * The ID of the payment associated with this activity
     * This will only be populated when a principal LedgerEntryToken is also populated.
     * If the fee is independent (there is no principal LedgerEntryToken) then this will likely not
     * be populated.
     */
    paymentId?: string | null;
}
export declare const paymentBalanceActivityFeeDetailSchema: Schema<PaymentBalanceActivityFeeDetail>;
