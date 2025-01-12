"use strict";
exports.__esModule = true;
exports.deprecatedCreateDisputeEvidenceFileRequestSchema = void 0;
var schema_1 = require("../schema");
exports.deprecatedCreateDisputeEvidenceFileRequestSchema = (0, schema_1.object)({
    idempotencyKey: ['idempotency_key', (0, schema_1.string)()],
    evidenceType: ['evidence_type', (0, schema_1.optional)((0, schema_1.string)())],
    contentType: ['content_type', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))]
});
//# sourceMappingURL=deprecatedCreateDisputeEvidenceFileRequest.js.map