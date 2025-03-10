import { listCashDrawerShiftEventsResponseSchema, } from '../models/listCashDrawerShiftEventsResponse';
import { listCashDrawerShiftsResponseSchema, } from '../models/listCashDrawerShiftsResponse';
import { retrieveCashDrawerShiftResponseSchema, } from '../models/retrieveCashDrawerShiftResponse';
import { number, optional, string } from '../schema';
import { BaseApi } from './baseApi';
export class CashDrawersApi extends BaseApi {
    /**
     * Provides the details for all of the cash drawer shifts for a location
     * in a date range.
     *
     * @param locationId  The ID of the location to query for a list of cash drawer shifts.
     * @param sortOrder   The order in which cash drawer shifts are listed in the response, based on their
     *                              opened_at field. Default value: ASC
     * @param beginTime   The inclusive start time of the query on opened_at, in ISO 8601 format.
     * @param endTime     The exclusive end date of the query on opened_at, in ISO 8601 format.
     * @param limit       Number of cash drawer shift events in a page of results (200 by default, 1000 max).
     * @param cursor      Opaque cursor for fetching the next page of results.
     * @return Response from the API call
     */
    async listCashDrawerShifts(locationId, sortOrder, beginTime, endTime, limit, cursor, requestOptions) {
        const req = this.createRequest('GET', '/v2/cash-drawers/shifts');
        const mapped = req.prepareArgs({
            locationId: [locationId, string()],
            sortOrder: [sortOrder, optional(string())],
            beginTime: [beginTime, optional(string())],
            endTime: [endTime, optional(string())],
            limit: [limit, optional(number())],
            cursor: [cursor, optional(string())],
        });
        req.query('location_id', mapped.locationId);
        req.query('sort_order', mapped.sortOrder);
        req.query('begin_time', mapped.beginTime);
        req.query('end_time', mapped.endTime);
        req.query('limit', mapped.limit);
        req.query('cursor', mapped.cursor);
        req.authenticate([{ global: true }]);
        return req.callAsJson(listCashDrawerShiftsResponseSchema, requestOptions);
    }
    /**
     * Provides the summary details for a single cash drawer shift. See
     * [ListCashDrawerShiftEvents]($e/CashDrawers/ListCashDrawerShiftEvents) for a list of cash drawer
     * shift events.
     *
     * @param locationId  The ID of the location to retrieve cash drawer shifts from.
     * @param shiftId     The shift ID.
     * @return Response from the API call
     */
    async retrieveCashDrawerShift(locationId, shiftId, requestOptions) {
        const req = this.createRequest('GET');
        const mapped = req.prepareArgs({
            locationId: [locationId, string()],
            shiftId: [shiftId, string()],
        });
        req.query('location_id', mapped.locationId);
        req.appendTemplatePath `/v2/cash-drawers/shifts/${mapped.shiftId}`;
        req.authenticate([{ global: true }]);
        return req.callAsJson(retrieveCashDrawerShiftResponseSchema, requestOptions);
    }
    /**
     * Provides a paginated list of events for a single cash drawer shift.
     *
     * @param locationId  The ID of the location to list cash drawer shifts for.
     * @param shiftId     The shift ID.
     * @param limit       Number of resources to be returned in a page of results (200 by default, 1000 max).
     * @param cursor      Opaque cursor for fetching the next page of results.
     * @return Response from the API call
     */
    async listCashDrawerShiftEvents(locationId, shiftId, limit, cursor, requestOptions) {
        const req = this.createRequest('GET');
        const mapped = req.prepareArgs({
            locationId: [locationId, string()],
            shiftId: [shiftId, string()],
            limit: [limit, optional(number())],
            cursor: [cursor, optional(string())],
        });
        req.query('location_id', mapped.locationId);
        req.query('limit', mapped.limit);
        req.query('cursor', mapped.cursor);
        req.appendTemplatePath `/v2/cash-drawers/shifts/${mapped.shiftId}/events`;
        req.authenticate([{ global: true }]);
        return req.callAsJson(listCashDrawerShiftEventsResponseSchema, requestOptions);
    }
}
//# sourceMappingURL=cashDrawersApi.js.map