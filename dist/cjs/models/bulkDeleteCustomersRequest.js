"use strict";
exports.__esModule = true;
exports.bulkDeleteCustomersRequestSchema = void 0;
var schema_1 = require("../schema");
exports.bulkDeleteCustomersRequestSchema = (0, schema_1.object)({ customerIds: ['customer_ids', (0, schema_1.array)((0, schema_1.string)())] });
//# sourceMappingURL=bulkDeleteCustomersRequest.js.map