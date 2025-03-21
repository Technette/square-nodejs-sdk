import { Schema } from '../schema';
export interface PaymentBalanceActivityAutomaticSavingsReversedDetail {
    /** The ID of the payment associated with this activity. */
    paymentId?: string | null;
    /** The ID of the payout associated with this activity. */
    payoutId?: string | null;
}
export declare const paymentBalanceActivityAutomaticSavingsReversedDetailSchema: Schema<PaymentBalanceActivityAutomaticSavingsReversedDetail>;
