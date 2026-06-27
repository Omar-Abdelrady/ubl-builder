"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UdtText = void 0;
const CctText_1 = require("./essentials/cct/CctText");
/**
 * udt:TextType
 * A character string (i.e. a finite set of characters), generally in the form of words of a language.
 * Namespace: urn:oasis:names:specification:ubl:schema:xsd:UnqualifiedDataTypes-2
 * Schema document: common/UBL-UnqualifiedDataTypes-2.1.xsd
 *
 */
class UdtText extends CctText_1.CctTextType {
    /**
     *
     * @param content
     * @param attributes
     */
    constructor(content, attributes) {
        super(content, attributes);
    }
}
exports.UdtText = UdtText;
