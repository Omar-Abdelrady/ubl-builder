"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UdtIdentifier = void 0;
const CctIdentifier_1 = require("./essentials/cct/CctIdentifier");
/**
 * udt:IdentifierType
 *  A character string to identify and uniquely distinguish one instance of an object in an identification scheme from all
 *  other objects in the same scheme, together with relevant supplementary information.
 * Namespace: urn:oasis:names:specification:ubl:schema:xsd:UnqualifiedDataTypes-2
 * Schema document: common/UBL-UnqualifiedDataTypes-2.1.xsd
 * See More: http://www.datypic.com/sc/ubl21/t-udt_IdentifierType.html
 *
 */
class UdtIdentifier extends CctIdentifier_1.CctIdentifierType {
    /**
     * @param {string} content
     * @param {UdtIdentifierAttributes} attributes
     */
    constructor(content, attributes) {
        super(content, attributes);
    }
}
exports.UdtIdentifier = UdtIdentifier;
