"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UdtGraphic = void 0;
const CctBinaryObject_1 = require("./essentials/cct/CctBinaryObject");
/**
 *  udt:GraphicType
 *  A diagram, graph, mathematical curve, or similar representation.
 * Namespace: urn:oasis:names:specification:ubl:schema:xsd:UnqualifiedDataTypes-2
 * Schema document: common/UBL-UnqualifiedDataTypes-2.1.xsd
 *
 */
class UdtGraphic extends CctBinaryObject_1.CctBinaryObjectType {
    /**
     *
     * @param content
     * @param attributes
     */
    constructor(content, attributes) {
        super(content, attributes);
    }
}
exports.UdtGraphic = UdtGraphic;
