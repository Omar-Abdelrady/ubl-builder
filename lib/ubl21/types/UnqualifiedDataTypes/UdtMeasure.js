"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UdtMeasure = void 0;
const CctMeasure_1 = require("./essentials/cct/CctMeasure");
/**
 * udt:MeasureType
 * A numeric value determined by measuring an object using a specified unit of measure.
 * Namespace: urn:oasis:names:specification:ubl:schema:xsd:UnqualifiedDataTypes-2
 * Schema document: common/UBL-UnqualifiedDataTypes-2.1.xsd
 *
 */
class UdtMeasure extends CctMeasure_1.CctMeasureType {
    constructor(content, attributes) {
        super(content, attributes);
    }
}
exports.UdtMeasure = UdtMeasure;
