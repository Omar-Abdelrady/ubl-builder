"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CctQuantityType = void 0;
const xsd_1 = require("../xsd");
/**
 *
 * Unique I D: UNDT000018
 * Category Code: CCT
 * Dictionary Entry Name: Quantity. Type
 * Version I D: 1.0
 * Definition: A counted number of non-monetary units possibly including fractions.
 * Representation Term Name: Quantity
 * Primitive Type: decimal
 *
 * A counted number of non-monetary units possibly including fractions.
 * More info: http://www.datypic.com/sc/ubl21/t-cct_QuantityType.html
 */
class CctQuantityType extends xsd_1.XsdDecimal {
    constructor(content, attributes) {
        super(content, attributes);
    }
    validateContent() {
        super.validateContent();
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
    setUnitCode(value) {
        this.attributes.unitCode = value;
    }
    setUnitCodeListID(value) {
        this.attributes.unitCodeListID = value;
    }
    setUnitCodeListAgencyID(value) {
        this.attributes.unitCodeListAgencyID = value;
    }
    setUnitCodeListAgencyName(value) {
        this.attributes.unitCodeListAgencyName = value;
    }
}
exports.CctQuantityType = CctQuantityType;
