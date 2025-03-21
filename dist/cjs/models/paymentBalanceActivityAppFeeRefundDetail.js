"use strict";
exports.__esModule = true;
exports.paymentBalanceActivityAppFeeRefundDetailSchema = void 0;
var schema_1 = require("../schema");
exports.paymentBalanceActivityAppFeeRefundDetailSchema = (0, schema_1.object)({
    paymentId: ['payment_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    refundId: ['refund_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    locationId: ['location_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))]
});
//# sourceMappingURL=paymentBalanceActivityAppFeeRefundDetail.js.map