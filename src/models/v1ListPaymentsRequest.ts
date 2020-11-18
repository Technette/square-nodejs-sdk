import { boolean, number, object, optional, Schema, string } from '../schema';

export interface V1ListPaymentsRequest {
  /** The order (e.g., chronological or alphabetical) in which results from a request are returned. */
  order?: string;
  /** The beginning of the requested reporting period, in ISO 8601 format. If this value is before January 1, 2013 (2013-01-01T00:00:00Z), this endpoint returns an error. Default value: The current time minus one year. */
  beginTime?: string;
  /** The end of the requested reporting period, in ISO 8601 format. If this value is more than one year greater than begin_time, this endpoint returns an error. Default value: The current time. */
  endTime?: string;
  /** The maximum number of payments to return in a single response. This value cannot exceed 200. */
  limit?: number;
  /**
   * A pagination cursor to retrieve the next set of results for your
   * original query to the endpoint.
   */
  batchToken?: string;
  /** Indicates whether or not to include partial payments in the response. Partial payments will have the tenders collected so far, but the itemizations will be empty until the payment is completed. */
  includePartial?: boolean;
}

export const v1ListPaymentsRequestSchema: Schema<V1ListPaymentsRequest> = object(
  {
    order: ['order', optional(string())],
    beginTime: ['begin_time', optional(string())],
    endTime: ['end_time', optional(string())],
    limit: ['limit', optional(number())],
    batchToken: ['batch_token', optional(string())],
    includePartial: ['include_partial', optional(boolean())],
  }
);
