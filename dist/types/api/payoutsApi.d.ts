import { ApiResponse, RequestOptions } from '../core';
import { GetPayoutResponse } from '../models/getPayoutResponse';
import { ListPayoutEntriesResponse } from '../models/listPayoutEntriesResponse';
import { ListPayoutsResponse } from '../models/listPayoutsResponse';
import { BaseApi } from './baseApi';
export declare class PayoutsApi extends BaseApi {
    /**
     * Retrieves a list of all payouts for the default location.
     * You can filter payouts by location ID, status, time range, and order them in ascending or descending
     * order.
     * To call this endpoint, set `PAYOUTS_READ` for the OAuth scope.
     *
     * @param locationId  The ID of the location for which to list the payouts. By default, payouts are
     *                              returned for the default (main) location associated with the seller.
     * @param status      If provided, only payouts with the given status are returned.
     * @param beginTime   The timestamp for the beginning of the payout creation time, in RFC 3339 format.
     *                              Inclusive. Default: The current time minus one year.
     * @param endTime     The timestamp for the end of the payout creation time, in RFC 3339 format. Default:
     *                              The current time.
     * @param sortOrder   The order in which payouts are listed.
     * @param cursor      A pagination cursor returned by a previous call to this endpoint. Provide this
     *                              cursor to retrieve the next set of results for the original query. For more
     *                              information, see [Pagination](https://developer.squareup.com/docs/build-basics/common-
     *                              api-patterns/pagination). If request parameters change between requests, subsequent
     *                              results may contain duplicates or missing records.
     * @param limit       The maximum number of results to be returned in a single page. It is possible to
     *                              receive fewer results than the specified limit on a given page. The default value of
     *                              100 is also the maximum allowed value. If the provided value is greater than 100, it
     *                              is ignored and the default value is used instead. Default: `100`
     * @return Response from the API call
     */
    listPayouts(locationId?: string, status?: string, beginTime?: string, endTime?: string, sortOrder?: string, cursor?: string, limit?: number, requestOptions?: RequestOptions): Promise<ApiResponse<ListPayoutsResponse>>;
    /**
     * Retrieves details of a specific payout identified by a payout ID.
     * To call this endpoint, set `PAYOUTS_READ` for the OAuth scope.
     *
     * @param payoutId  The ID of the payout to retrieve the information for.
     * @return Response from the API call
     */
    getPayout(payoutId: string, requestOptions?: RequestOptions): Promise<ApiResponse<GetPayoutResponse>>;
    /**
     * Retrieves a list of all payout entries for a specific payout.
     * To call this endpoint, set `PAYOUTS_READ` for the OAuth scope.
     *
     * @param payoutId   The ID of the payout to retrieve the information for.
     * @param sortOrder  The order in which payout entries are listed.
     * @param cursor     A pagination cursor returned by a previous call to this endpoint. Provide this cursor
     *                             to retrieve the next set of results for the original query. For more information, see
     *                             [Pagination](https://developer.squareup.com/docs/build-basics/common-api-
     *                             patterns/pagination). If request parameters change between requests, subsequent
     *                             results may contain duplicates or missing records.
     * @param limit      The maximum number of results to be returned in a single page. It is possible to
     *                             receive fewer results than the specified limit on a given page. The default value of
     *                             100 is also the maximum allowed value. If the provided value is greater than 100, it
     *                             is ignored and the default value is used instead. Default: `100`
     * @return Response from the API call
     */
    listPayoutEntries(payoutId: string, sortOrder?: string, cursor?: string, limit?: number, requestOptions?: RequestOptions): Promise<ApiResponse<ListPayoutEntriesResponse>>;
}
