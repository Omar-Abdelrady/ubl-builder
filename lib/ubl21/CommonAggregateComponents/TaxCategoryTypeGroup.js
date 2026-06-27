"use strict";
// 'use strict'
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaxCategoryTypeParamsMap = exports.ClassifiedTaxCategory = exports.TaxCategory = void 0;
const GenericAggregateComponent_1 = require("./GenericAggregateComponent");
const UnqualifiedDataTypes_1 = require("../types/UnqualifiedDataTypes");
const UdtPercent_1 = require("../types/UnqualifiedDataTypes/UdtPercent");
const UdtAmount_1 = require("../types/UnqualifiedDataTypes/UdtAmount");
const TaxScheme_1 = require("./TaxScheme");
const TaxCategoryType_1 = require("./TaxCategoryType");
Object.defineProperty(exports, "TaxCategory", { enumerable: true, get: function () { return TaxCategoryType_1.TaxCategoryType; } });
/*

  1  cbc:ID [0..1]    An identifier for this tax category.
  2  cbc:Name [0..1]    The name of this tax category.
  3  cbc:Percent [0..1]    The tax rate for this category, expressed as a percentage.
  4  cbc:BaseUnitMeasure [0..1]    A Unit of Measures used as the basic for the tax calculation applied at a certain rate per unit.
  5  cbc:PerUnitAmount [0..1]    Where a tax is applied at a certain rate per unit, the rate per unit applied.
  6  cbc:TaxExemptionReasonCode [0..1]    The reason for tax being exempted, expressed as a code.
  7  cbc:TaxExemptionReason [0..*]    The reason for tax being exempted, expressed as text.
  8  cbc:TierRange [0..1]    Where a tax is tiered, the range of taxable amounts that determines the rate of tax applicable to this tax category.
  9  cbc:TierRatePercent [0..1]    Where a tax is tiered, the tax rate that applies within the specified range of taxable amounts for this tax category.
  10  cac:TaxScheme [1..1]    The taxation scheme within which this tax category is defined.

*/
const ParamsMap = {
    id: { order: 1, attributeName: 'cbc:ID', min: 0, max: 1, classRef: UnqualifiedDataTypes_1.UdtIdentifier },
    name: { order: 2, attributeName: 'cbc:Name', min: 0, max: 1, classRef: UnqualifiedDataTypes_1.UdtName },
    percent: { order: 3, attributeName: 'cbc:Percent', min: 0, max: 1, classRef: UdtPercent_1.UdtPercent },
    baseUnitMeasure: { order: 4, attributeName: 'cbc:BaseUnitMeasure', min: 0, max: 1, classRef: UnqualifiedDataTypes_1.UdtMeasure },
    perUnitAmount: { order: 5, attributeName: 'cbc:PerUnitAmount', min: 0, max: 1, classRef: UdtAmount_1.UdtAmount },
    taxExemptionReasonCode: { order: 6, attributeName: 'cbc:TaxExemptionReasonCode', min: 0, max: 1, classRef: UnqualifiedDataTypes_1.UdtCode },
    taxExemptionReason: { order: 7, attributeName: 'cbc:TaxExemptionReason', min: 0, max: undefined, classRef: UnqualifiedDataTypes_1.UdtText },
    tierRange: { order: 8, attributeName: 'cbc:TierRange', min: 0, max: 1, classRef: UnqualifiedDataTypes_1.UdtText },
    tierRatePercent: { order: 9, attributeName: 'cbc:TierRatePercent', min: 0, max: 1, classRef: UdtPercent_1.UdtPercent },
    taxScheme: { order: 10, attributeName: 'cac:TaxScheme', min: 0, max: 1, classRef: TaxScheme_1.TaxScheme },
};
exports.TaxCategoryTypeParamsMap = ParamsMap;
/**
 *
 */
class ClassifiedTaxCategoryType extends GenericAggregateComponent_1.default {
    constructor(content) {
        super(content, ParamsMap, 'cac:ClassifiedTaxCategory');
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
exports.ClassifiedTaxCategory = ClassifiedTaxCategoryType;
