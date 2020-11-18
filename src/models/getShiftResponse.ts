import { array, lazy, object, optional, Schema } from '../schema';
import { Error, errorSchema } from './error';
import { Shift, shiftSchema } from './shift';

/**
 * A response to request to get a `Shift`. Contains
 * the requested `Shift` object. May contain a set of `Error` objects if
 * the request resulted in errors.
 */
export interface GetShiftResponse {
  /**
   * A record of the hourly rate, start, and end times for a single work shift
   * for an employee. May include a record of the start and end times for breaks
   * taken during the shift.
   */
  shift?: Shift;
  /** Any errors that occurred during the request. */
  errors?: Error[];
}

export const getShiftResponseSchema: Schema<GetShiftResponse> = object({
  shift: ['shift', optional(lazy(() => shiftSchema))],
  errors: ['errors', optional(array(lazy(() => errorSchema)))],
});
