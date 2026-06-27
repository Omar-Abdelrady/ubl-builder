"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UdtDateTime = void 0;
const xsd_1 = require("./essentials/xsd");
/**
 *  udt:DateTimeType
 *  A particular point in the progression of time, together with relevant supplementary information.
 * Namespace: urn:oasis:names:specification:ubl:schema:xsd:UnqualifiedDataTypes-2
 * Schema document: common/UBL-UnqualifiedDataTypes-2.1.xsd
 * See More: http://www.datypic.com/sc/ubl21/t-udt_DateTimeType.html
 */
class UdtDateTime extends xsd_1.XsdDate {
    constructor(content) {
        super(content);
    }
}
exports.UdtDateTime = UdtDateTime;
