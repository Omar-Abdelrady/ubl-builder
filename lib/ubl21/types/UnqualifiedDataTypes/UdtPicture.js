"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UdtPicture = void 0;
const CctBinaryObject_1 = require("./essentials/cct/CctBinaryObject");
/**
 * udt:NumericType
 * Numeric information that is assigned or is determined by calculation, counting, or sequencing.
 * It does not require a unit of quantity or unit of measure.
 * Namespace: urn:oasis:names:specification:ubl:schema:xsd:UnqualifiedDataTypes-2
 * Schema document: common/UBL-UnqualifiedDataTypes-2.1.xsd
 *
 * See More: http://www.datypic.com/sc/ubl21/t-udt_PictureType.html
 */
class UdtPicture extends CctBinaryObject_1.CctBinaryObjectType {
    /**
     *
     * @param content
     * @param attributes
     */
    constructor(content, attributes) {
        super(content, attributes);
    }
}
exports.UdtPicture = UdtPicture;
