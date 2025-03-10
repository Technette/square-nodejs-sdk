import { Schema } from '../schema';
export interface PaymentBalanceActivityRefundDetail {
    /** The ID of the payment associated with this activity. */
    paymentId?: string | null;
    /** The ID of the refund associated with this activity. */
    refundId?: string | null;
}
export declare const paymentBalanceActivityRefundDetailSchema: Schema<PaymentBalanceActivityRefundDetail>;
