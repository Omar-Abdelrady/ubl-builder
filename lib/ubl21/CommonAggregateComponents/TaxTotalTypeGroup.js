"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WithholdingTaxTotal = exports.TaxTotal = void 0;
const GenericAggregateComponent_1 = require("./GenericAggregateComponent");
const UdtAmount_1 = require("../types/UnqualifiedDataTypes/UdtAmount");
const UnqualifiedDataTypes_1 = require("../types/UnqualifiedDataTypes");
const TaxSubtotal_1 = require("./TaxSubtotal");
/*

  1  cbc:TaxAmount [1..1]    The total tax amount for a particular taxation scheme, e.g., VAT; the sum of the tax subtotals for each tax category within the taxation scheme.
  2  cbc:RoundingAmount [0..1]    The rounding amount (positive or negative) added to the calculated tax total to produce the rounded TaxAmount.
  3  cbc:TaxEvidenceIndicator [0..1]    An indicator that this total is recognized as legal evidence for taxation purposes (true) or not (false).
  4  cbc:TaxIncludedIndicator [0..1]    An indicator that tax is included in the calculation (true) or not (false).
  5  cac:TaxSubtotal [0..*]    One of the subtotals the sum of which equals the total tax amount for a particular taxation scheme.

*/
const ParamsMap = {
    taxAmount: { order: 1, attributeName: 'cbc:TaxAmount', min: 1, max: 1, classRef: UdtAmount_1.UdtAmount },
    roundingAmount: { order: 2, attributeName: 'cbc:RoundingAmount', min: 0, max: 1, classRef: UdtAmount_1.UdtAmount },
    taxEvidenceIndicator: { order: 3, attributeName: 'cbc:TaxEvidenceIndicator', min: 0, max: 1, classRef: UnqualifiedDataTypes_1.UdtIndicator },
    taxIncludedIndicator: { order: 4, attributeName: 'cac:TaxIncludedIndicator', min: 0, max: 1, classRef: UnqualifiedDataTypes_1.UdtIndicator },
    taxSubtotals: { order: 5, attributeName: 'cac:TaxSubtotal', min: 0, max: undefined, classRef: TaxSubtotal_1.TaxSubtotal },
};
/**
 *
 */
class TaxTotalType extends GenericAggregateComponent_1.default {
    /**
     * @param {AllowedParams} content
     * @param {string} name
     */
    constructor(content) {
        super(content, ParamsMap, 'cac:TaxTotalType');
    }
    /**
     *
     * @param { UdtAmount | string } value
     */
    setTaxAmount(value) {
        this.attributes.taxAmount = value instanceof UdtAmount_1.UdtAmount ? value : new UdtAmount_1.UdtAmount(value);
    }
    /**
     *
     * @param {boolean} raw raw value
     */
    getTaxAmount(raw = true) {
        return raw ? this.attributes.taxAmount.content : this.attributes.taxAmount;
    }
    getTaxSubtotals() {
        return this.attributes.taxSubtotals;
    }
    setTaxSubtotals(taxSubtotals) {
        if (!Array.isArray(taxSubtotals))
            throw new Error('taxSubtotals must to be an Array');
        taxSubtotals.forEach((value) => {
            if (!(value instanceof TaxSubtotal_1.TaxSubtotal)) {
                throw new Error('Items of taxSubtotals must be instance of TaxSubtotal class');
            }
        });
        this.attributes.taxSubtotals = taxSubtotals;
    }
    calculateTotalTaxAmount() {
        return this.attributes.taxSubtotals.reduce((acc, current) => {
            return acc + current.getTaxAmount();
        }, 0);
    }
}
exports.TaxTotal = TaxTotalType;
exports.WithholdingTaxTotal = TaxTotalType;
