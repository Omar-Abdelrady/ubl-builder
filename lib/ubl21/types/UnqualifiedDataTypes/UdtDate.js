"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UdtDate = void 0;
const xsd_1 = require("./essentials/xsd");
/**
 * udt:DateTimeType
 * A particular point in the progression of time, together with relevant supplementary information.
 * Namespace: urn:oasis:names:specification:ubl:schema:xsd:UnqualifiedDataTypes-2
 * Schema document: common/UBL-UnqualifiedDataTypes-2.1.xsd
 *
 * CCTS properties:
 *
 * Unique I D: UBLUDT000008
 * Category Code: UDT
 * Dictionary Entry Name: Date Time. Type
 * Version I D: 1.0
 * Definition: A particular point in the progression of time, together with relevant supplementary information.
 * Representation Term Name: Date Time
 * Primitive Type: string
 * Usage Rule: Can be used for a date and/or time.
 */
class UdtDate extends xsd_1.XsdDate {
    constructor(content) {
        super(content);
    }
}
exports.UdtDate = UdtDate;
