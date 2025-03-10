import { Schema } from '../schema';
import { TipSettings } from './tipSettings';
export interface DeviceCheckoutOptions {
    /**
     * The unique ID of the device intended for this `TerminalCheckout`.
     * A list of `DeviceCode` objects can be retrieved from the /v2/devices/codes endpoint.
     * Match a `DeviceCode.device_id` value with `device_id` to get the associated device code.
     */
    deviceId: string;
    /** Instructs the device to skip the receipt screen. Defaults to false. */
    skipReceiptScreen?: boolean | null;
    /** Indicates that signature collection is desired during checkout. Defaults to false. */
    collectSignature?: boolean | null;
    tipSettings?: TipSettings;
    /**
     * Show the itemization screen prior to taking a payment. This field is only meaningful when the
     * checkout includes an order ID. Defaults to true.
     */
    showItemizedCart?: boolean | null;
}
export declare const deviceCheckoutOptionsSchema: Schema<DeviceCheckoutOptions>;
