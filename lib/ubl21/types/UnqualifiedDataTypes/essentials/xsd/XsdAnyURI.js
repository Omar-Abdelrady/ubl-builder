'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const XsdAnySimpleType_1 = require("./XsdAnySimpleType");
/**
 * xsd:normalizedString
 * he type xsd:anyURI represents a Uniform Resource Identifier (URI) reference.
 *  URIs are used to identify resources, and they may be absolute or relative.
 * Absolute URIs provide the entire context for locating the resources, such as http://datypic.com/prod.html.
 * Relative URIs are specified as the difference from a base URI, such as ../prod.html. It is also possible to specify a
 *  fragment identifier, using the # character, such as ../prod.html#shirt.
 * More info http://www.datypic.com/sc/xsd/t-xsd_anyURI.html
 */
class XsdAnyURI extends XsdAnySimpleType_1.default {
    constructor(content, attributtes) {
        super(content, attributtes);
        this.validateContent();
    }
    parseToJson() {
        return { '#text': this.content };
    }
}
exports.default = XsdAnyURI;
