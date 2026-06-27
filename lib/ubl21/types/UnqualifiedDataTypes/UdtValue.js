"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UdtValue = void 0;
const CctNumeric_1 = require("./essentials/cct/CctNumeric");
/**
 * udt:TimeType
 * An instance of time that occurs every day.
 * Namespace: urn:oasis:names:specification:ubl:schema:xsd:UnqualifiedDataTypes-2
 * Schema document: common/UBL-UnqualifiedDataTypes-2.1.xsd
 *
 * See more: http://www.datypic.com/sc/ubl21/t-udt_TimeType.html
 *
 */
class UdtValue extends CctNumeric_1.CctNumericType {
    constructor(content, attributes) {
        super(content, attributes);
    }
}
exports.UdtValue = UdtValue;
