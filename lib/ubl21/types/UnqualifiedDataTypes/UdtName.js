"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UdtName = void 0;
const CctText_1 = require("./essentials/cct/CctText");
/**
 * udt:NameType
 * A character string that constitutes the distinctive designation of a person, place, thing or concept.
 *
 * Namespace: urn:oasis:names:specification:ubl:schema:xsd:UnqualifiedDataTypes-2
 * Schema document: common/UBL-UnqualifiedDataTypes-2.1.xsd
 *
 */
class UdtName extends CctText_1.CctTextType {
    /**
     * @param content
     * @param attributes
     */
    constructor(content, attributes) {
        super(content, attributes);
    }
}
exports.UdtName = UdtName;
