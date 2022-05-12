import { boolean, number, object, optional, Schema } from '../schema';

/** Represents a [RetrieveCustomerCustomAttribute]($e/CustomerCustomAttributes/RetrieveCustomerCustomAttribute) request. */
export interface RetrieveCustomerCustomAttributeRequest {
  /**
   * Indicates whether to return the [custom attribute definition]($m/CustomAttributeDefinition) in the `definition` field of
   * the custom attribute. Set this parameter to `true` to get the name and description of the custom
   * attribute, information about the data type, or other definition details. The default value is `false`.
   */
  withDefinition?: boolean;
  /**
   * The current version of the custom attribute, which is used for strongly consistent reads to
   * guarantee that you receive the most up-to-date data. When included in the request, Square
   * returns the specified version or a higher version if one exists. If the specified version is
   * higher than the current version, Square returns a `BAD_REQUEST` error.
   */
  version?: number;
}

export const retrieveCustomerCustomAttributeRequestSchema: Schema<RetrieveCustomerCustomAttributeRequest> = object(
  {
    withDefinition: ['with_definition', optional(boolean())],
    version: ['version', optional(number())],
  }
);
