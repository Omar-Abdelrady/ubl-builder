'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.XsdBoolean = void 0;
// const  = require('./XsdAnySimpleType');
const XsdAnySimpleType_1 = require("./XsdAnySimpleType");
const VALID_VALUES = [true, false, 1, 0, 'true', 'false'];
/**
 * xsd:boolean
 * The type xsd:boolean represents logical yes/no values.
 * The valid values for xsd:boolean are true, false, 0, and 1.
 * Values that are capitalized (e.g. TRUE) or abbreviated (e.g. T) are not valid.
 * More info http://www.datypic.com/sc/xsd/t-xsd_boolean.html
 */
class XsdBoolean extends XsdAnySimpleType_1.default {
    constructor(content, attributtes) {
        super(content, attributtes);
        this.validateContent();
    }
    validateContent() {
        if (!VALID_VALUES.includes(this.content)) {
            throw new Error("XsdBoolean content is not allowed. the allowed values are [true, false, 1, 0, 'true', 'false']");
        }
    }
}
exports.XsdBoolean = XsdBoolean;
