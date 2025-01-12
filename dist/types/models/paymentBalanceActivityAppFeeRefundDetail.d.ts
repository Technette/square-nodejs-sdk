import { Schema } from '../schema';
export interface PaymentBalanceActivityAppFeeRefundDetail {
    /** The ID of the payment associated with this activity. */
    paymentId?: string | null;
    /** The ID of the refund associated with this activity. */
    refundId?: string | null;
    /** The ID of the location of the merchant associated with the payment refund activity */
    locationId?: string | null;
}
export declare const paymentBalanceActivityAppFeeRefundDetailSchema: Schema<PaymentBalanceActivityAppFeeRefundDetail>;
