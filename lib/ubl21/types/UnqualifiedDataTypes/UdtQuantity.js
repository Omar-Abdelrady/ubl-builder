"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UdtQuantity = void 0;
const CctQuantity_1 = require("./essentials/cct/CctQuantity");
/**
 * udt:QuantityType
 * A counted number of non-monetary units, possibly including a fractional part.
 *
 * Namespace: urn:oasis:names:specification:ubl:schema:xsd:UnqualifiedDataTypes-2
 * Schema document: common/UBL-UnqualifiedDataTypes-2.1.xsd
 * See More: http://www.datypic.com/sc/ubl21/t-udt_QuantityType.html
 *
 */
class UdtQuantity extends CctQuantity_1.CctQuantityType {
    /**
     *
     * @param {string} content
     * @param {UdtQuantityAttributes} attributes
     */
    constructor(content, attributes) {
        super(content, attributes);
    }
}
exports.UdtQuantity = UdtQuantity;
