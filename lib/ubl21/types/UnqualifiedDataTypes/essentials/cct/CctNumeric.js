"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CctNumericType = void 0;
const xsd_1 = require("../xsd");
/**
 * Numeric information that is assigned or is determined by calculation, counting, or sequencing.
 * It does not require a unit of quantity or unit of measure.
 * More info: http://www.datypic.com/sc/ubl21/t-cct_NumericType.html
 */
class CctNumericType extends xsd_1.XsdDecimal {
    constructor(content, attributes) {
        super(content, attributes);
    }
    parseToJson() {
        const jsonResult = { '#text': this.content };
        Object.keys(this.attributes)
            .filter((att) => this.attributes[att])
            .forEach((att) => {
            jsonResult[`@${att}`] = this.attributes[att];
        });
        return jsonResult;
    }
    /**
     *
     * @param {string} value
     */
    setFormat(value) {
        this.attributes.format = value;
    }
}
exports.CctNumericType = CctNumericType;
