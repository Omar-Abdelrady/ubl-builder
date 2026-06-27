"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UdtRate = void 0;
const CctNumeric_1 = require("./essentials/cct/CctNumeric");
/**
 * udt:NumericType
 * Numeric information that is assigned or is determined by calculation, counting, or sequencing.
 * It does not require a unit of quantity or unit of measure.
 *
 * Namespace: urn:oasis:names:specification:ubl:schema:xsd:UnqualifiedDataTypes-2
 * Schema document: common/UBL-UnqualifiedDataTypes-2.1.xsd
 *
 * See More: http://www.datypic.com/sc/ubl21/t-udt_RateType.html
 *
 */
class UdtRate extends CctNumeric_1.CctNumericType {
    constructor(content, attributes) {
        super(content, attributes);
    }
}
exports.UdtRate = UdtRate;
