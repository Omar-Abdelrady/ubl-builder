"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CctBinaryObjectType = void 0;
const xsd_1 = require("../xsd");
/**
 * cct:BinaryObjectType
 *  A set of finite-length sequences of binary octets.
 *
 * Namespace: urn:un:unece:uncefact:data:specification:CoreComponentTypeSchemaModule:2
 *
 * CCTS properties: *
 *   Unique ID: UNDT000002
 *   Category Code: CCT
 *   Dictionary Entry Name: Binary Object. Type
 *   Version I D: 1.0
 *   Definition: A set of finite-length sequences of binary octets.
 *   Representation Term Name: Binary Object
 *   Primitive Type: binary
 *
 * MORE INFO: http://www.datypic.com/sc/ubl21/t-cct_BinaryObjectType.html
 */
class CctBinaryObjectType extends xsd_1.XsdNormalizedString {
    /**
     *
     * @param content
     * @param attributes
     */
    constructor(content, attributes) {
        super(content, attributes);
    }
    parseToJson() {
        const jsonResult = { '#text': this.content };
        Object.keys(this.attributes)
            .filter((att) => this.attributes[att])
            .forEach((attribute) => {
            jsonResult[`@${attribute}`] = this.attributes[attribute];
        });
        return jsonResult;
    }
    /**
     * @param value
     */
    setFormat(value) {
        this.attributes.format = value;
    }
    /**
     *
     * @param {string} value
     */
    setMimecode(value) {
        this.attributes.mimeCode = value;
    }
    /**
     *
     * @param {string} value
     */
    setEncodingCode(value) {
        this.attributes.encodingCode = value;
    }
    setCharacterSetCode(value) {
        this.attributes.characterSetCode = value;
    }
    /**
     *
     * @param {string} value
     */
    setUri(value) {
        this.attributes.uri = value;
    }
    setFileName(value) {
        this.attributes.filename = value;
    }
}
exports.CctBinaryObjectType = CctBinaryObjectType;
