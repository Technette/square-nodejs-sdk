import { Schema } from '../schema';
/** Provides metadata when the event `type` is `ACCUMULATE_PROMOTION_POINTS`. */
export interface LoyaltyEventAccumulatePromotionPoints {
    /** The Square-assigned ID of the [loyalty program](entity:LoyaltyProgram). */
    loyaltyProgramId?: string;
    /** The Square-assigned ID of the [loyalty promotion](entity:LoyaltyPromotion). */
    loyaltyPromotionId?: string;
    /** The number of points earned by the event. */
    points: number;
    /**
     * The ID of the [order](entity:Order) for which the buyer earned the promotion points.
     * Only applications that use the Orders API to process orders can trigger this event.
     */
    orderId: string;
}
export declare const loyaltyEventAccumulatePromotionPointsSchema: Schema<LoyaltyEventAccumulatePromotionPoints>;
