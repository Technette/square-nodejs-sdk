import { createCustomerGroupRequestSchema, } from '../models/createCustomerGroupRequest';
import { createCustomerGroupResponseSchema, } from '../models/createCustomerGroupResponse';
import { deleteCustomerGroupResponseSchema, } from '../models/deleteCustomerGroupResponse';
import { listCustomerGroupsResponseSchema, } from '../models/listCustomerGroupsResponse';
import { retrieveCustomerGroupResponseSchema, } from '../models/retrieveCustomerGroupResponse';
import { updateCustomerGroupRequestSchema, } from '../models/updateCustomerGroupRequest';
import { updateCustomerGroupResponseSchema, } from '../models/updateCustomerGroupResponse';
import { number, optional, string } from '../schema';
import { BaseApi } from './baseApi';
export class CustomerGroupsApi extends BaseApi {
    /**
     * Retrieves the list of customer groups of a business.
     *
     * @param cursor A pagination cursor returned by a previous call to this endpoint. Provide this cursor to
     *                         retrieve the next set of results for your original query.  For more information, see
     *                         [Pagination](https://developer.squareup.com/docs/build-basics/common-api-
     *                         patterns/pagination).
     * @param limit  The maximum number of results to return in a single page. This limit is advisory. The
     *                         response might contain more or fewer results. If the limit is less than 1 or greater than
     *                         50, Square returns a `400 VALUE_TOO_LOW` or `400 VALUE_TOO_HIGH` error. The default value
     *                         is 50.  For more information, see [Pagination](https://developer.squareup.com/docs/build-
     *                         basics/common-api-patterns/pagination).
     * @return Response from the API call
     */
    async listCustomerGroups(cursor, limit, requestOptions) {
        const req = this.createRequest('GET', '/v2/customers/groups');
        const mapped = req.prepareArgs({
            cursor: [cursor, optional(string())],
            limit: [limit, optional(number())],
        });
        req.query('cursor', mapped.cursor);
        req.query('limit', mapped.limit);
        req.authenticate([{ global: true }]);
        return req.callAsJson(listCustomerGroupsResponseSchema, requestOptions);
    }
    /**
     * Creates a new customer group for a business.
     *
     * The request must include the `name` value of the group.
     *
     * @param body         An object containing the fields to POST for the request.
     *                                                          See the corresponding object definition for field
     *                                                          details.
     * @return Response from the API call
     */
    async createCustomerGroup(body, requestOptions) {
        const req = this.createRequest('POST', '/v2/customers/groups');
        const mapped = req.prepareArgs({
            body: [body, createCustomerGroupRequestSchema],
        });
        req.header('Content-Type', 'application/json');
        req.json(mapped.body);
        req.authenticate([{ global: true }]);
        return req.callAsJson(createCustomerGroupResponseSchema, requestOptions);
    }
    /**
     * Deletes a customer group as identified by the `group_id` value.
     *
     * @param groupId  The ID of the customer group to delete.
     * @return Response from the API call
     */
    async deleteCustomerGroup(groupId, requestOptions) {
        const req = this.createRequest('DELETE');
        const mapped = req.prepareArgs({ groupId: [groupId, string()] });
        req.appendTemplatePath `/v2/customers/groups/${mapped.groupId}`;
        req.authenticate([{ global: true }]);
        return req.callAsJson(deleteCustomerGroupResponseSchema, requestOptions);
    }
    /**
     * Retrieves a specific customer group as identified by the `group_id` value.
     *
     * @param groupId  The ID of the customer group to retrieve.
     * @return Response from the API call
     */
    async retrieveCustomerGroup(groupId, requestOptions) {
        const req = this.createRequest('GET');
        const mapped = req.prepareArgs({ groupId: [groupId, string()] });
        req.appendTemplatePath `/v2/customers/groups/${mapped.groupId}`;
        req.authenticate([{ global: true }]);
        return req.callAsJson(retrieveCustomerGroupResponseSchema, requestOptions);
    }
    /**
     * Updates a customer group as identified by the `group_id` value.
     *
     * @param groupId      The ID of the customer group to update.
     * @param body         An object containing the fields to POST for the request.
     *                                                          See the corresponding object definition for field
     *                                                          details.
     * @return Response from the API call
     */
    async updateCustomerGroup(groupId, body, requestOptions) {
        const req = this.createRequest('PUT');
        const mapped = req.prepareArgs({
            groupId: [groupId, string()],
            body: [body, updateCustomerGroupRequestSchema],
        });
        req.header('Content-Type', 'application/json');
        req.json(mapped.body);
        req.appendTemplatePath `/v2/customers/groups/${mapped.groupId}`;
        req.authenticate([{ global: true }]);
        return req.callAsJson(updateCustomerGroupResponseSchema, requestOptions);
    }
}
//# sourceMappingURL=customerGroupsApi.js.map