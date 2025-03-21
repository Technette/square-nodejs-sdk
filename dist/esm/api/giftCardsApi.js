import { createGiftCardRequestSchema, } from '../models/createGiftCardRequest';
import { createGiftCardResponseSchema, } from '../models/createGiftCardResponse';
import { linkCustomerToGiftCardRequestSchema, } from '../models/linkCustomerToGiftCardRequest';
import { linkCustomerToGiftCardResponseSchema, } from '../models/linkCustomerToGiftCardResponse';
import { listGiftCardsResponseSchema, } from '../models/listGiftCardsResponse';
import { retrieveGiftCardFromGANRequestSchema, } from '../models/retrieveGiftCardFromGANRequest';
import { retrieveGiftCardFromGANResponseSchema, } from '../models/retrieveGiftCardFromGANResponse';
import { retrieveGiftCardFromNonceRequestSchema, } from '../models/retrieveGiftCardFromNonceRequest';
import { retrieveGiftCardFromNonceResponseSchema, } from '../models/retrieveGiftCardFromNonceResponse';
import { retrieveGiftCardResponseSchema, } from '../models/retrieveGiftCardResponse';
import { unlinkCustomerFromGiftCardRequestSchema, } from '../models/unlinkCustomerFromGiftCardRequest';
import { unlinkCustomerFromGiftCardResponseSchema, } from '../models/unlinkCustomerFromGiftCardResponse';
import { number, optional, string } from '../schema';
import { BaseApi } from './baseApi';
export class GiftCardsApi extends BaseApi {
    /**
     * Lists all gift cards. You can specify optional filters to retrieve
     * a subset of the gift cards. Results are sorted by `created_at` in ascending order.
     *
     * @param type        If a [type](entity:GiftCardType) is provided, the endpoint returns gift cards of the
     *                              specified type. Otherwise, the endpoint returns gift cards of all types.
     * @param state       If a [state](entity:GiftCardStatus) is provided, the endpoint returns the gift cards
     *                              in the specified state. Otherwise, the endpoint returns the gift cards of all states.
     * @param limit       If a limit is provided, the endpoint returns only the specified number of results
     *                              per page. The maximum value is 200. The default value is 30. For more information,
     *                              see [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination).
     * @param cursor      A pagination cursor returned by a previous call to this endpoint. Provide this
     *                              cursor to retrieve the next set of results for the original query. If a cursor is not
     *                              provided, the endpoint returns the first page of the results.  For more information,
     *                              see [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination).
     * @param customerId  If a customer ID is provided, the endpoint returns only the gift cards linked to the
     *                              specified customer.
     * @return Response from the API call
     */
    async listGiftCards(type, state, limit, cursor, customerId, requestOptions) {
        const req = this.createRequest('GET', '/v2/gift-cards');
        const mapped = req.prepareArgs({
            type: [type, optional(string())],
            state: [state, optional(string())],
            limit: [limit, optional(number())],
            cursor: [cursor, optional(string())],
            customerId: [customerId, optional(string())],
        });
        req.query('type', mapped.type);
        req.query('state', mapped.state);
        req.query('limit', mapped.limit);
        req.query('cursor', mapped.cursor);
        req.query('customer_id', mapped.customerId);
        req.authenticate([{ global: true }]);
        return req.callAsJson(listGiftCardsResponseSchema, requestOptions);
    }
    /**
     * Creates a digital gift card or registers a physical (plastic) gift card. After the gift card
     * is created, you must call [CreateGiftCardActivity]($e/GiftCardActivities/CreateGiftCardActivity)
     * to activate the card with an initial balance before it can be used for payment.
     *
     * @param body         An object containing the fields to POST for the request.  See
     *                                                     the corresponding object definition for field details.
     * @return Response from the API call
     */
    async createGiftCard(body, requestOptions) {
        const req = this.createRequest('POST', '/v2/gift-cards');
        const mapped = req.prepareArgs({
            body: [body, createGiftCardRequestSchema],
        });
        req.header('Content-Type', 'application/json');
        req.json(mapped.body);
        req.authenticate([{ global: true }]);
        return req.callAsJson(createGiftCardResponseSchema, requestOptions);
    }
    /**
     * Retrieves a gift card using the gift card account number (GAN).
     *
     * @param body         An object containing the fields to POST for the
     *                                                              request.  See the corresponding object definition for
     *                                                              field details.
     * @return Response from the API call
     */
    async retrieveGiftCardFromGAN(body, requestOptions) {
        const req = this.createRequest('POST', '/v2/gift-cards/from-gan');
        const mapped = req.prepareArgs({
            body: [body, retrieveGiftCardFromGANRequestSchema],
        });
        req.header('Content-Type', 'application/json');
        req.json(mapped.body);
        req.authenticate([{ global: true }]);
        return req.callAsJson(retrieveGiftCardFromGANResponseSchema, requestOptions);
    }
    /**
     * Retrieves a gift card using a secure payment token that represents the gift card.
     *
     * @param body         An object containing the fields to POST for the
     *                                                                request.  See the corresponding object definition
     *                                                                for field details.
     * @return Response from the API call
     */
    async retrieveGiftCardFromNonce(body, requestOptions) {
        const req = this.createRequest('POST', '/v2/gift-cards/from-nonce');
        const mapped = req.prepareArgs({
            body: [body, retrieveGiftCardFromNonceRequestSchema],
        });
        req.header('Content-Type', 'application/json');
        req.json(mapped.body);
        req.authenticate([{ global: true }]);
        return req.callAsJson(retrieveGiftCardFromNonceResponseSchema, requestOptions);
    }
    /**
     * Links a customer to a gift card, which is also referred to as adding a card on file.
     *
     * @param giftCardId   The ID of the gift card to be linked.
     * @param body         An object containing the fields to POST for the
     *                                                             request.  See the corresponding object definition for
     *                                                             field details.
     * @return Response from the API call
     */
    async linkCustomerToGiftCard(giftCardId, body, requestOptions) {
        const req = this.createRequest('POST');
        const mapped = req.prepareArgs({
            giftCardId: [giftCardId, string()],
            body: [body, linkCustomerToGiftCardRequestSchema],
        });
        req.header('Content-Type', 'application/json');
        req.json(mapped.body);
        req.appendTemplatePath `/v2/gift-cards/${mapped.giftCardId}/link-customer`;
        req.authenticate([{ global: true }]);
        return req.callAsJson(linkCustomerToGiftCardResponseSchema, requestOptions);
    }
    /**
     * Unlinks a customer from a gift card, which is also referred to as removing a card on file.
     *
     * @param giftCardId   The ID of the gift card to be unlinked.
     * @param body         An object containing the fields to POST for the
     *                                                                 request.  See the corresponding object definition
     *                                                                 for field details.
     * @return Response from the API call
     */
    async unlinkCustomerFromGiftCard(giftCardId, body, requestOptions) {
        const req = this.createRequest('POST');
        const mapped = req.prepareArgs({
            giftCardId: [giftCardId, string()],
            body: [body, unlinkCustomerFromGiftCardRequestSchema],
        });
        req.header('Content-Type', 'application/json');
        req.json(mapped.body);
        req.appendTemplatePath `/v2/gift-cards/${mapped.giftCardId}/unlink-customer`;
        req.authenticate([{ global: true }]);
        return req.callAsJson(unlinkCustomerFromGiftCardResponseSchema, requestOptions);
    }
    /**
     * Retrieves a gift card using the gift card ID.
     *
     * @param id The ID of the gift card to retrieve.
     * @return Response from the API call
     */
    async retrieveGiftCard(id, requestOptions) {
        const req = this.createRequest('GET');
        const mapped = req.prepareArgs({ id: [id, string()] });
        req.appendTemplatePath `/v2/gift-cards/${mapped.id}`;
        req.authenticate([{ global: true }]);
        return req.callAsJson(retrieveGiftCardResponseSchema, requestOptions);
    }
}
//# sourceMappingURL=giftCardsApi.js.map