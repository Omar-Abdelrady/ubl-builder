"use strict";
// 'use strict'
Object.defineProperty(exports, "__esModule", { value: true });
exports.PricingExchangeRate = exports.PaymentExchangeRate = exports.ExchangeRate = void 0;
const GenericAggregateComponent_1 = require("./GenericAggregateComponent");
const UnqualifiedDataTypes_1 = require("../types/UnqualifiedDataTypes");
const UdtRate_1 = require("../types/UnqualifiedDataTypes/UdtRate");
// const GenericAggregateComponent = require("./GenericAggregateComponent");
// /* TODO GANERIC CLASSES */
// const { UdtCode, UdtIdentifier, UdtDate, UdtText, UdtTime, UdtName, UdtQuantity, UdtRate } = require("../types/UnqualifiedDataTypes");
/* TODO GANERIC CLASSES */
/*

  1  cbc:SourceCurrencyCode [1..1]    The reference currency for this exchange rate; the currency from which the exchange is being made.
  2  cbc:SourceCurrencyBaseRate [0..1]    In the case of a source currency with denominations of small value, the unit base.
  3  cbc:TargetCurrencyCode [1..1]    The target currency for this exchange rate; the currency to which the exchange is being made.
  4  cbc:TargetCurrencyBaseRate [0..1]    In the case of a target currency with denominations of small value, the unit base.
  5  cbc:ExchangeMarketID [0..1]    An identifier for the currency exchange market used as the source of this exchange rate.
  6  cbc:CalculationRate [0..1]    The factor applied to the source currency to calculate the target currency.
  7  cbc:MathematicOperatorCode [0..1]    A code signifying whether the calculation rate is a multiplier or a divisor.
  8  cbc:Date [0..1]    The date on which the exchange rate was established.
  9  cac:ForeignExchangeContract [0..1]    A contract for foreign exchange.

*/
const ParamsMap = {
    sourceCurrencyCode: { order: 1, attributeName: 'cbc:SourceCurrencyCode', min: 1, max: 1, classRef: UnqualifiedDataTypes_1.UdtCode },
    sourceCurrencyBaseRate: { order: 2, attributeName: 'cbc:SourceCurrencyBaseRate', min: 0, max: 1, classRef: UdtRate_1.UdtRate },
    targetCurrencyCode: { order: 3, attributeName: 'cbc:TargetCurrencyCode', min: 1, max: 1, classRef: UnqualifiedDataTypes_1.UdtCode },
    targetCurrencyBaseRate: { order: 4, attributeName: 'cbc:TargetCurrencyBaseRate', min: 0, max: 1, classRef: UdtRate_1.UdtRate },
    exchangeMarketID: { order: 5, attributeName: 'cbc:ExchangeMarketID', min: 0, max: 1, classRef: UnqualifiedDataTypes_1.UdtIdentifier },
    calculationRate: { order: 6, attributeName: 'cbc:CalculationRate', min: 0, max: 1, classRef: UdtRate_1.UdtRate },
    mathematicOperatorCode: { order: 7, attributeName: 'cbc:MathematicOperatorCode', min: 0, max: 1, classRef: UnqualifiedDataTypes_1.UdtCode },
    date: { order: 8, attributeName: 'cbc:Date', min: 0, max: 1, classRef: UnqualifiedDataTypes_1.UdtDate },
    // ForeignExchangeContract: { order: 8,  attributeName: 'cac:ForeignExchangeContract', min: 0, max:1, classRef: ForeignExchangeContract },
    // ##################################  TODO CAC MISSING ################################################
    // postalAddress: { order: 10,  attributeName: 'cac:PostalAddress', min: 0, max: 1, classRef: PostalAddress }, //
    // ##################################  TODO CAC MISSING ################################################
};
/**
 *
 */
class ExchangeRate extends GenericAggregateComponent_1.default {
    constructor(content) {
        super(content, ParamsMap, 'cac:ExchangeRate');
    }
}
exports.ExchangeRate = ExchangeRate;
exports.PaymentExchangeRate = ExchangeRate;
exports.PricingExchangeRate = ExchangeRate;
