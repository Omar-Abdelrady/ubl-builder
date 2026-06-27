"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaxCategoryType = void 0;
const GenericAggregateComponent_1 = require("./GenericAggregateComponent");
const TaxCategoryTypeGroup_1 = require("./TaxCategoryTypeGroup");
const UdtPercent_1 = require("../types/UnqualifiedDataTypes/UdtPercent");
class TaxCategoryType extends GenericAggregateComponent_1.default {
    constructor(content) {
        super(content, TaxCategoryTypeGroup_1.TaxCategoryTypeParamsMap, 'cac:TaxCategoryType');
    }
    setPercent(value) {
        this.attributes.percent = value instanceof UdtPercent_1.UdtPercent ? value : new UdtPercent_1.UdtPercent(value);
    }
    /**
     * @returns { string | UdtPercent }
     */
    getPercent(rawValue = true) {
        return rawValue ? this.attributes.percent.content : this.attributes.percent;
    }
    getTaxScheme() {
        return this.attributes.taxScheme;
    }
}
exports.TaxCategoryType = TaxCategoryType;
