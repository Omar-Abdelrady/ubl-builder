"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UdtVideo = void 0;
const CctBinaryObject_1 = require("./essentials/cct/CctBinaryObject");
/**
 * udt:VideoType
 * A video representation.
 * Namespace: urn:oasis:names:specification:ubl:schema:xsd:UnqualifiedDataTypes-2
 * Schema document: common/UBL-UnqualifiedDataTypes-2.1.xsd
 *
 */
class UdtVideo extends CctBinaryObject_1.CctBinaryObjectType {
    /**
     *
     * @param content
     * @param attributes
     */
    constructor(content, attributes) {
        super(content, attributes);
    }
}
exports.UdtVideo = UdtVideo;
