"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UdtSound = void 0;
const CctBinaryObject_1 = require("./essentials/cct/CctBinaryObject");
/**
 * udt:SoundType
 * An audio representation.
 * Namespace: urn:oasis:names:specification:ubl:schema:xsd:UnqualifiedDataTypes-2
 * Schema document: common/UBL-UnqualifiedDataTypes-2.1.xsd
 *
 * Type based on xsd:base64Binary
 * See More: http://www.datypic.com/sc/ubl21/t-udt_SoundType.html
 *
 */
class UdtSound extends CctBinaryObject_1.CctBinaryObjectType {
    /**
     *
     * @param content
     * @param attributes
     */
    constructor(content, attributes) {
        super(content, attributes);
    }
}
exports.UdtSound = UdtSound;
