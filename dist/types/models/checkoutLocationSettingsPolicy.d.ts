import { Schema } from '../schema';
export interface CheckoutLocationSettingsPolicy {
    /** A unique ID to identify the policy when making changes. You must set the UID for policy updates, but it’s optional when setting new policies. */
    uid?: string | null;
    /** The title of the policy. This is required when setting the description, though you can update it in a different request. */
    title?: string | null;
    /** The description of the policy. */
    description?: string | null;
}
export declare const checkoutLocationSettingsPolicySchema: Schema<CheckoutLocationSettingsPolicy>;
