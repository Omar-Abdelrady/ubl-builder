"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const XsdAnySimpleType_1 = require("./XsdAnySimpleType");
/**
 * xsd:anySimpleType *
 * The type xsd:anySimpleType is the base type from which all other built-in types are derived.
 * Any value (including an empty value) is allowed for xsd:anySimpleType.
 * Namespace: http://www.w3.org/2001/XMLSchema
 */
class XsdString extends XsdAnySimpleType_1.default {
    constructor(content, attributes) {
        super(content, attributes);
    }
    validateContent() {
        return;
    }
}
exports.default = XsdString;
