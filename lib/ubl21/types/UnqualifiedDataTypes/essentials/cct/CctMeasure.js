"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CctMeasureType = void 0;
const xsd_1 = require("../xsd");
/**
 * Numeric information that is assigned or is determined by calculation, counting, or sequencing.
 * It does not require a unit of quantity or unit of measure.
 * More info: http://www.datypic.com/sc/ubl21/t-cct_NumericType.html
 */
class CctMeasureType extends xsd_1.XsdDecimal {
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
    setUnitCode(value) {
        this.attributes.unitCode = value;
    }
    setunitCodeListVersionID(value) {
        this.attributes.unitCodeListVersionID = value;
    }
}
exports.CctMeasureType = CctMeasureType;
