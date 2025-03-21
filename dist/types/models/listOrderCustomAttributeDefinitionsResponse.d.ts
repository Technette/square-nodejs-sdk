import { Schema } from '../schema';
import { CustomAttributeDefinition } from './customAttributeDefinition';
import { Error } from './error';
/** Represents a response from listing order custom attribute definitions. */
export interface ListOrderCustomAttributeDefinitionsResponse {
    /** The retrieved custom attribute definitions. If no custom attribute definitions are found, Square returns an empty object (`{}`). */
    customAttributeDefinitions: CustomAttributeDefinition[];
    /**
     * The cursor to provide in your next call to this endpoint to retrieve the next page of results for your original request.
     * This field is present only if the request succeeded and additional results are available.
     * For more information, see [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination).
     */
    cursor?: string;
    /** Any errors that occurred during the request. */
    errors?: Error[];
}
export declare const listOrderCustomAttributeDefinitionsResponseSchema: Schema<ListOrderCustomAttributeDefinitionsResponse>;
