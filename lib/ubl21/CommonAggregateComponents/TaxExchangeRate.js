'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaxExchangeRate = void 0;
const GenericAggregateComponent_1 = require("./GenericAggregateComponent");
const UdtCode_1 = require("../types/UnqualifiedDataTypes/UdtCode");
const UdtDate_1 = require("../types/UnqualifiedDataTypes/UdtDate");
const UdtRate_1 = require("../types/UnqualifiedDataTypes/UdtRate");
/*
  1  cbc:SourceCurrencyCode [1..1]    The source currency code.
  2  cbc:TargetCurrencyCode [1..1]    The target currency code.
  3  cbc:CalculationRate [1..1]      The calculation rate for converting the source currency to the target currency.
  4  cbc:Date [0..1]                The date of the exchange rate.
*/
const ParamsMap = {
    sourceCurrencyCode: {
        order: 1,
        attributeName: 'cbc:SourceCurrencyCode',
        min: 1,
        max: 1,
        classRef: UdtCode_1.UdtCode,
    },
    targetCurrencyCode: {
        order: 2,
        attributeName: 'cbc:TargetCurrencyCode',
        min: 1,
        max: 1,
        classRef: UdtCode_1.UdtCode,
    },
    calculationRate: {
        order: 3,
        attributeName: 'cbc:CalculationRate',
        min: 1,
        max: 1,
        classRef: UdtRate_1.UdtRate,
    },
    date: {
        order: 4,
        attributeName: 'cbc:Date',
        min: 0,
        max: 1,
        classRef: UdtDate_1.UdtDate,
    },
};
/**
 * Represents the TaxExchangeRate component in the invoice.
 */
class TaxExchangeRate extends GenericAggregateComponent_1.default {
    /**
     * @param {AllowedParams} content
     */
    constructor(content) {
        super(content, ParamsMap, 'cac:TaxExchangeRate');
    }
    /**
     * Get the source currency code.
     * @param {boolean} [raw=true] - Return raw content or UdtCode instance.
     * @returns {string | UdtCode} The source currency code.
     */
    getSourceCurrencyCode(raw = true) {
        return raw ? this.attributes.sourceCurrencyCode.content : this.attributes.sourceCurrencyCode;
    }
    /**
     * Get the target currency code.
     * @param {boolean} [raw=true] - Return raw content or UdtCode instance.
     * @returns {string | UdtCode} The target currency code.
     */
    getTargetCurrencyCode(raw = true) {
        return raw ? this.attributes.targetCurrencyCode.content : this.attributes.targetCurrencyCode;
    }
    /**
     * Get the calculation rate.
     * @param {boolean} [raw=true] - Return raw content or UdtRate instance.
     * @returns {string | UdtRate} The calculation rate.
     */
    getCalculationRate(raw = true) {
        return raw ? this.attributes.calculationRate.content : this.attributes.calculationRate;
    }
    /**
     * Get the date of the exchange rate.
     * @param {boolean} [raw=true] - Return raw content or UdtDate instance.
     * @returns {string | UdtDate | undefined} The date, if set.
     */
    getDate(raw = true) {
        var _a;
        return raw ? (_a = this.attributes.date) === null || _a === void 0 ? void 0 : _a.content : this.attributes.date;
    }
}
exports.TaxExchangeRate = TaxExchangeRate;
