"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UdtBinaryObject = void 0;
const CctBinaryObject_1 = require("./essentials/cct/CctBinaryObject");
/**
 * udt:BinaryObjectType
 * A set of finite-length sequences of binary octets.
 * Namespace: urn:oasis:names:specification:ubl:schema:xsd:UnqualifiedDataTypes-2
 * Schema document: common/UBL-UnqualifiedDataTypes-2.1.xsd
 * See More: http://www.datypic.com/sc/ubl21/t-udt_BinaryObjectType.html
 *
 */
class UdtBinaryObject extends CctBinaryObject_1.CctBinaryObjectType {
    constructor(content, attributes) {
        super(content, attributes);
    }
}
exports.UdtBinaryObject = UdtBinaryObject;
