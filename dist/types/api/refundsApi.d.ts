import { ApiResponse, RequestOptions } from '../core';
import { GetPaymentRefundResponse } from '../models/getPaymentRefundResponse';
import { ListPaymentRefundsResponse } from '../models/listPaymentRefundsResponse';
import { RefundPaymentRequest } from '../models/refundPaymentRequest';
import { RefundPaymentResponse } from '../models/refundPaymentResponse';
import { BaseApi } from './baseApi';
export declare class RefundsApi extends BaseApi {
    /**
     * Retrieves a list of refunds for the account making the request.
     *
     * Results are eventually consistent, and new refunds or changes to refunds might take several
     * seconds to appear.
     *
     * The maximum results per page is 100.
     *
     * @param beginTime   Indicates the start of the time range to retrieve each `PaymentRefund` for, in RFC
     *                              3339  format.  The range is determined using the `created_at` field for each
     *                              `PaymentRefund`.   Default: The current time minus one year.
     * @param endTime     Indicates the end of the time range to retrieve each `PaymentRefund` for, in RFC
     *                              3339  format.  The range is determined using the `created_at` field for each
     *                              `PaymentRefund`.  Default: The current time.
     * @param sortOrder   The order in which results are listed by `PaymentRefund.created_at`: - `ASC` -
     *                              Oldest to newest. - `DESC` - Newest to oldest (default).
     * @param cursor      A pagination cursor returned by a previous call to this endpoint. Provide this
     *                              cursor to retrieve the next set of results for the original query.  For more
     *                              information, see [Pagination](https://developer.squareup.com/docs/build-basics/common-
     *                              api-patterns/pagination).
     * @param locationId  Limit results to the location supplied. By default, results are returned for all
     *                              locations associated with the seller.
     * @param status      If provided, only refunds with the given status are returned. For a list of refund
     *                              status values, see [PaymentRefund](entity:PaymentRefund).  Default: If omitted,
     *                              refunds are returned regardless of their status.
     * @param sourceType  If provided, only returns refunds whose payments have the indicated source type.
     *                              Current values include `CARD`, `BANK_ACCOUNT`, `WALLET`, `CASH`, and `EXTERNAL`. For
     *                              information about these payment source types, see [Take Payments](https://developer.
     *                              squareup.com/docs/payments-api/take-payments).  Default: If omitted, refunds are
     *                              returned regardless of the source type.
     * @param limit       The maximum number of results to be returned in a single page.  It is possible to
     *                              receive fewer results than the specified limit on a given page.  If the supplied
     *                              value is greater than 100, no more than 100 results are returned.  Default: 100
     * @return Response from the API call
     */
    listPaymentRefunds(beginTime?: string, endTime?: string, sortOrder?: string, cursor?: string, locationId?: string, status?: string, sourceType?: string, limit?: number, requestOptions?: RequestOptions): Promise<ApiResponse<ListPaymentRefundsResponse>>;
    /**
     * Refunds a payment. You can refund the entire payment amount or a
     * portion of it. You can use this endpoint to refund a card payment or record a
     * refund of a cash or external payment. For more information, see
     * [Refund Payment](https://developer.squareup.com/docs/payments-api/refund-payments).
     *
     * @param body         An object containing the fields to POST for the request.  See
     *                                                    the corresponding object definition for field details.
     * @return Response from the API call
     */
    refundPayment(body: RefundPaymentRequest, requestOptions?: RequestOptions): Promise<ApiResponse<RefundPaymentResponse>>;
    /**
     * Retrieves a specific refund using the `refund_id`.
     *
     * @param refundId  The unique ID for the desired `PaymentRefund`.
     * @return Response from the API call
     */
    getPaymentRefund(refundId: string, requestOptions?: RequestOptions): Promise<ApiResponse<GetPaymentRefundResponse>>;
}
