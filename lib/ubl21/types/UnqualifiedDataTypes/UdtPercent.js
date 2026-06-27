"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UdtPercent = void 0;
const CctNumeric_1 = require("./essentials/cct/CctNumeric");
/**
 * udt:NumericType
 * Numeric information that is assigned or is determined by calculation, counting, or sequencing.
 * It does not require a unit of quantity or unit of measure.
 * Namespace: urn:oasis:names:specification:ubl:schema:xsd:UnqualifiedDataTypes-2
 * Schema document: common/UBL-UnqualifiedDataTypes-2.1.xsd
 *
 */
class UdtPercent extends CctNumeric_1.CctNumericType {
    /**
     *
     * @param content
     * @param attributes
     */
    constructor(content, attributes) {
        super(content, attributes);
    }
}
exports.UdtPercent = UdtPercent;
