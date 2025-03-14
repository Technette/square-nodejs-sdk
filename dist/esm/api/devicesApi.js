import { createDeviceCodeRequestSchema, } from '../models/createDeviceCodeRequest';
import { createDeviceCodeResponseSchema, } from '../models/createDeviceCodeResponse';
import { getDeviceCodeResponseSchema, } from '../models/getDeviceCodeResponse';
import { getDeviceResponseSchema, } from '../models/getDeviceResponse';
import { listDeviceCodesResponseSchema, } from '../models/listDeviceCodesResponse';
import { listDevicesResponseSchema, } from '../models/listDevicesResponse';
import { number, optional, string } from '../schema';
import { BaseApi } from './baseApi';
export class DevicesApi extends BaseApi {
    /**
     * List devices associated with the merchant. Currently, only Terminal API
     * devices are supported.
     *
     * @param cursor      A pagination cursor returned by a previous call to this endpoint. Provide this
     *                              cursor to retrieve the next set of results for the original query. See
     *                              [Pagination](https://developer.squareup.com/docs/build-basics/common-api-
     *                              patterns/pagination) for more information.
     * @param sortOrder   The order in which results are listed. - `ASC` - Oldest to newest. - `DESC` - Newest
     *                              to oldest (default).
     * @param limit       The number of results to return in a single page.
     * @param locationId  If present, only returns devices at the target location.
     * @return Response from the API call
     */
    async listDevices(cursor, sortOrder, limit, locationId, requestOptions) {
        const req = this.createRequest('GET', '/v2/devices');
        const mapped = req.prepareArgs({
            cursor: [cursor, optional(string())],
            sortOrder: [sortOrder, optional(string())],
            limit: [limit, optional(number())],
            locationId: [locationId, optional(string())],
        });
        req.query('cursor', mapped.cursor);
        req.query('sort_order', mapped.sortOrder);
        req.query('limit', mapped.limit);
        req.query('location_id', mapped.locationId);
        req.authenticate([{ global: true }]);
        return req.callAsJson(listDevicesResponseSchema, requestOptions);
    }
    /**
     * Lists all DeviceCodes associated with the merchant.
     *
     * @param cursor       A pagination cursor returned by a previous call to this endpoint. Provide this to
     *                               retrieve the next set of results for your original query.  See [Paginating
     *                               results](https://developer.squareup.com/docs/working-with-apis/pagination) for more
     *                               information.
     * @param locationId   If specified, only returns DeviceCodes of the specified location. Returns
     *                               DeviceCodes of all locations if empty.
     * @param productType  If specified, only returns DeviceCodes targeting the specified product type.
     *                               Returns DeviceCodes of all product types if empty.
     * @param status       If specified, returns DeviceCodes with the specified statuses. Returns DeviceCodes
     *                               of status `PAIRED` and `UNPAIRED` if empty.
     * @return Response from the API call
     */
    async listDeviceCodes(cursor, locationId, productType, status, requestOptions) {
        const req = this.createRequest('GET', '/v2/devices/codes');
        const mapped = req.prepareArgs({
            cursor: [cursor, optional(string())],
            locationId: [locationId, optional(string())],
            productType: [productType, optional(string())],
            status: [status, optional(string())],
        });
        req.query('cursor', mapped.cursor);
        req.query('location_id', mapped.locationId);
        req.query('product_type', mapped.productType);
        req.query('status', mapped.status);
        req.authenticate([{ global: true }]);
        return req.callAsJson(listDeviceCodesResponseSchema, requestOptions);
    }
    /**
     * Creates a DeviceCode that can be used to login to a Square Terminal device to enter the connected
     * terminal mode.
     *
     * @param body         An object containing the fields to POST for the request.
     *                                                       See the corresponding object definition for field details.
     * @return Response from the API call
     */
    async createDeviceCode(body, requestOptions) {
        const req = this.createRequest('POST', '/v2/devices/codes');
        const mapped = req.prepareArgs({
            body: [body, createDeviceCodeRequestSchema],
        });
        req.header('Content-Type', 'application/json');
        req.json(mapped.body);
        req.authenticate([{ global: true }]);
        return req.callAsJson(createDeviceCodeResponseSchema, requestOptions);
    }
    /**
     * Retrieves DeviceCode with the associated ID.
     *
     * @param id The unique identifier for the device code.
     * @return Response from the API call
     */
    async getDeviceCode(id, requestOptions) {
        const req = this.createRequest('GET');
        const mapped = req.prepareArgs({ id: [id, string()] });
        req.appendTemplatePath `/v2/devices/codes/${mapped.id}`;
        req.authenticate([{ global: true }]);
        return req.callAsJson(getDeviceCodeResponseSchema, requestOptions);
    }
    /**
     * Retrieves Device with the associated `device_id`.
     *
     * @param deviceId  The unique ID for the desired `Device`.
     * @return Response from the API call
     */
    async getDevice(deviceId, requestOptions) {
        const req = this.createRequest('GET');
        const mapped = req.prepareArgs({ deviceId: [deviceId, string()] });
        req.appendTemplatePath `/v2/devices/${mapped.deviceId}`;
        req.authenticate([{ global: true }]);
        return req.callAsJson(getDeviceResponseSchema, requestOptions);
    }
}
//# sourceMappingURL=devicesApi.js.map