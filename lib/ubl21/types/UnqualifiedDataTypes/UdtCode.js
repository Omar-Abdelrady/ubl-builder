"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UdtCode = void 0;
const CctCode_1 = require("./essentials/cct/CctCode");
/**
 * udt:CodeType
 * A character string (letters, figures, or symbols) that for brevity and/or language independence may be used to represent
 * or replace a definitive value or text of an attribute, together with relevant supplementary information.
 * Namespace: urn:oasis:names:specification:ubl:schema:xsd:UnqualifiedDataTypes-2
 * Schema document: common/UBL-UnqualifiedDataTypes-2.1.xsd
 * See More: http://www.datypic.com/sc/ubl21/t-udt_CodeType.html
 *
 */
class UdtCode extends CctCode_1.CctCodeType {
    /**
     *
     * @param content
     * @param attributes
     */
    constructor(content, attributes) {
        super(content, attributes);
    }
}
exports.UdtCode = UdtCode;
