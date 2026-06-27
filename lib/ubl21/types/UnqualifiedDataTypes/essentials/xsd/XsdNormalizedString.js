"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const XsdString_1 = require("./XsdString");
/**
 * xsd:normalizedString
 *
 * The type xsd:normalizedString represents a character string that may contain any Unicode character allowed by XML. Certain characters,
 * namely the "less than" symbol (<) and the ampersand (&), must be escaped (using the entities &lt; and &amp;, respectively)
 * when used in strings in XML instances.
 *
 * The xsd:normalizedString type has a whiteSpace facet of replace, which means that the processor replaces each carriage return,
 * line feed, and tab by a single space. This processing is equivalent to the processing of CDATA attribute values in XML 1.0.
 * There is no collapsing of multiple consecutive spaces into a single space.
 * Namespace: http://www.w3.org/2001/XMLSchema
 * MORE INFO: http://www.datypic.com/sc/xsd/t-xsd_normalizedString.html
 *
 */
class XsdNormalizedString extends XsdString_1.default {
    constructor(content, attributtes) {
        super(content, attributtes);
    }
}
exports.default = XsdNormalizedString;
