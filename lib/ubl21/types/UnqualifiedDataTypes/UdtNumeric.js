"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UdtNumeric = void 0;
const CctNumeric_1 = require("./essentials/cct/CctNumeric");
/**
 * udt:NumericType
 * Numeric information that is assigned or is determined by calculation, counting, or sequencing.
 * It does not require a unit of quantity or unit of measure.
 * Namespace: urn:oasis:names:specification:ubl:schema:xsd:UnqualifiedDataTypes-2
 * Schema document: common/UBL-UnqualifiedDataTypes-2.1.xsd
 *
 * Se More: http://www.datypic.com/sc/ubl21/t-udt_NumericType.html
 *
 */
class UdtNumeric extends CctNumeric_1.CctNumericType {
    /**
     *
     * @param content value
     * @param attributes attributes
     */
    constructor(content, attributes) {
        super(content, attributes);
    }
}
exports.UdtNumeric = UdtNumeric;
