"use strict";
exports.__esModule = true;
exports.deleteSnippetResponseSchema = void 0;
var schema_1 = require("../schema");
var error_1 = require("./error");
exports.deleteSnippetResponseSchema = (0, schema_1.object)({ errors: ['errors', (0, schema_1.optional)((0, schema_1.array)((0, schema_1.lazy)(function () { return error_1.errorSchema; })))] });
//# sourceMappingURL=deleteSnippetResponse.js.map