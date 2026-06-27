"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CctAmountType = void 0;
const xsd_1 = require("../xsd");
/**
 * A number of monetary units specified in a currency where the unit of the currency is explicit or implied.
 * More info: http://www.datypic.com/sc/ubl21/t-cct_AmountType.html
 */
class CctAmountType extends xsd_1.XsdDecimal {
    /**
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
    setCurrencyID(value) {
        this.attributes.currencyID = value;
    }
    setCurrencyCodeListVersionID(value) {
        this.attributes.currencyCodeListVersionID = value;
    }
}
exports.CctAmountType = CctAmountType;
