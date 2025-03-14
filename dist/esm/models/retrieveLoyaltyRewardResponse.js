import { array, lazy, object, optional } from '../schema';
import { errorSchema } from './error';
import { loyaltyRewardSchema } from './loyaltyReward';
export const retrieveLoyaltyRewardResponseSchema = object({
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    reward: ['reward', optional(lazy(() => loyaltyRewardSchema))],
});
//# sourceMappingURL=retrieveLoyaltyRewardResponse.js.map