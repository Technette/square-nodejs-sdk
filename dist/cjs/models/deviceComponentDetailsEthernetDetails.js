"use strict";
exports.__esModule = true;
exports.deviceComponentDetailsEthernetDetailsSchema = void 0;
var schema_1 = require("../schema");
exports.deviceComponentDetailsEthernetDetailsSchema = (0, schema_1.object)({
    active: ['active', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.boolean)()))],
    ipAddressV4: ['ip_address_v4', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))]
});
//# sourceMappingURL=deviceComponentDetailsEthernetDetails.js.map