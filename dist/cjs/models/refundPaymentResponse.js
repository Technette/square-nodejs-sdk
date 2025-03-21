"use strict";
exports.__esModule = true;
exports.refundPaymentResponseSchema = void 0;
var schema_1 = require("../schema");
var error_1 = require("./error");
var paymentRefund_1 = require("./paymentRefund");
exports.refundPaymentResponseSchema = (0, schema_1.object)({
    errors: ['errors', (0, schema_1.optional)((0, schema_1.array)((0, schema_1.lazy)(function () { return error_1.errorSchema; })))],
    refund: ['refund', (0, schema_1.optional)((0, schema_1.lazy)(function () { return paymentRefund_1.paymentRefundSchema; }))]
});
//# sourceMappingURL=refundPaymentResponse.js.map