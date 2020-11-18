import { object, optional, Schema, string } from '../schema';

/**
 * Represents a group of customer profiles that match one or more predefined filter criteria.
 * Segments (also known as Smart Groups) are defined and created within Customer Directory in the Square Dashboard or Point of Sale.
 */
export interface CustomerSegment {
  /** Unique Square-generated ID for the segment. */
  id?: string;
  /** Name of the segment. */
  name: string;
  /** The timestamp when the segment was created, in RFC 3339 format. */
  createdAt?: string;
  /** The timestamp when the segment was last updated, in RFC 3339 format. */
  updatedAt?: string;
}

export const customerSegmentSchema: Schema<CustomerSegment> = object({
  id: ['id', optional(string())],
  name: ['name', string()],
  createdAt: ['created_at', optional(string())],
  updatedAt: ['updated_at', optional(string())],
});
