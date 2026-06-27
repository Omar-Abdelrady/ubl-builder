"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UdtAmount = void 0;
const CctAmount_1 = require("./essentials/cct/CctAmount");
/**
 * udt:AmountType
 * A number of monetary units specified using a given unit of currency.
 * Namespace: urn:oasis:names:specification:ubl:schema:xsd:UnqualifiedDataTypes-2
 * Schema document: common/UBL-UnqualifiedDataTypes-2.1.xsd
 *
 * CCTS properties:
 *
 *   Unique I D: UBLUDT000001
 *   Category Code: UDT
 *   Dictionary Entry Name: Amount. Type
 *   Version I D: 1.0
 *   Definition: A number of monetary units specified using a given unit of currency.
 *   Representation Term Name: Amount
 *
 */
class UdtAmount extends CctAmount_1.CctAmountType {
    /**
     *
     * @param {XsdString} content
     * @param {UdtAmountAttributes} attributes
     */
    constructor(content, attributes) {
        super(content, attributes);
    }
}
exports.UdtAmount = UdtAmount;
