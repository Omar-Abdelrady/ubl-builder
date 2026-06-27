"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UdtTime = void 0;
const XsdDate_1 = require("./essentials/xsd/XsdDate");
/**
 * udt:TimeType
 * An instance of time that occurs every day.
 * Namespace: urn:oasis:names:specification:ubl:schema:xsd:UnqualifiedDataTypes-2
 * Schema document: common/UBL-UnqualifiedDataTypes-2.1.xsd
 *
 * See more: http://www.datypic.com/sc/ubl21/t-udt_TimeType.html
 *
 */
class UdtTime extends XsdDate_1.default {
    constructor(content) {
        super(content);
    }
}
exports.UdtTime = UdtTime;
