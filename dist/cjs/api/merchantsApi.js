"use strict";
exports.__esModule = true;
exports.MerchantsApi = void 0;
var tslib_1 = require("tslib");
var listMerchantsResponse_1 = require("../models/listMerchantsResponse");
var retrieveMerchantResponse_1 = require("../models/retrieveMerchantResponse");
var schema_1 = require("../schema");
var baseApi_1 = require("./baseApi");
var MerchantsApi = /** @class */ (function (_super) {
    tslib_1.__extends(MerchantsApi, _super);
    function MerchantsApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Provides details about the merchant associated with a given access token.
     *
     * The access token used to connect your application to a Square seller is associated
     * with a single merchant. That means that `ListMerchants` returns a list
     * with a single `Merchant` object. You can specify your personal access token
     * to get your own merchant information or specify an OAuth token to get the
     * information for the merchant that granted your application access.
     *
     * If you know the merchant ID, you can also use the [RetrieveMerchant]($e/Merchants/RetrieveMerchant)
     * endpoint to retrieve the merchant information.
     *
     * @param cursor The cursor generated by the previous response.
     * @return Response from the API call
     */
    MerchantsApi.prototype.listMerchants = function (cursor, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('GET', '/v2/merchants');
                mapped = req.prepareArgs({ cursor: [cursor, (0, schema_1.optional)((0, schema_1.number)())] });
                req.query('cursor', mapped.cursor);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(listMerchantsResponse_1.listMerchantsResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Retrieves the `Merchant` object for the given `merchant_id`.
     *
     * @param merchantId  The ID of the merchant to retrieve. If the string "me" is supplied as the ID, then
     *                              retrieve the merchant that is currently accessible to this call.
     * @return Response from the API call
     */
    MerchantsApi.prototype.retrieveMerchant = function (merchantId, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('GET');
                mapped = req.prepareArgs({ merchantId: [merchantId, (0, schema_1.string)()] });
                req.appendTemplatePath(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["/v2/merchants/", ""], ["/v2/merchants/", ""])), mapped.merchantId);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(retrieveMerchantResponse_1.retrieveMerchantResponseSchema, requestOptions)];
            });
        });
    };
    return MerchantsApi;
}(baseApi_1.BaseApi));
exports.MerchantsApi = MerchantsApi;
var templateObject_1;
//# sourceMappingURL=merchantsApi.js.map