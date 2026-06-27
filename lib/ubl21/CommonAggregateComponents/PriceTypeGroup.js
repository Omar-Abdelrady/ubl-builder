"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Price = void 0;
const GenericAggregateComponent_1 = require("./GenericAggregateComponent");
const UdtAmount_1 = require("../types/UnqualifiedDataTypes/UdtAmount");
const UnqualifiedDataTypes_1 = require("../types/UnqualifiedDataTypes");
const UdtRate_1 = require("../types/UnqualifiedDataTypes/UdtRate");
const ValidityPeriod_1 = require("./ValidityPeriod");
const AllowanceChargeTypeGroup_1 = require("./AllowanceChargeTypeGroup");
const PriceListTypeGroup_1 = require("./PriceListTypeGroup");
const ExchangeRateTypeGroup_1 = require("./ExchangeRateTypeGroup");
/*

  1    cbc:PriceAmount [1..1]    The amount of the price.
  2    cbc:BaseQuantity [0..1]    The quantity at which this price applies.
  3    cbc:PriceChangeReason [0..*]    A reason for a price change.
  4    cbc:PriceTypeCode [0..1]    The type of price, expressed as a code.
  5    cbc:PriceType [0..1]    The type of price, expressed as text.
  6    cbc:OrderableUnitFactorRate [0..1]    The factor by which the base price unit can be converted to the orderable unit.
  7    cac:ValidityPeriod [0..*]    A period during which this price is valid.
  8    cac:PriceList [0..1]    Information about a price list applicable to this price.
  9    cac:AllowanceCharge [0..*]    An allowance or charge associated with this price.
  10    cac:PricingExchangeRate [0..1]    The exchange rate applicable to this price, if it differs from the exchange rate applicable to the document as a whole.

*/
const ParamsMap = {
    priceAmount: { order: 1, attributeName: 'cbc:PriceAmount', min: 0, max: 1, classRef: UdtAmount_1.UdtAmount },
    baseQuantity: { order: 2, attributeName: 'cbc:BaseQuantity', min: 0, max: 1, classRef: UnqualifiedDataTypes_1.UdtQuantity },
    priceChangeReasons: { order: 3, attributeName: 'cbc:PriceChangeReason', min: 0, max: 1, classRef: UnqualifiedDataTypes_1.UdtText },
    priceTypeCode: { order: 4, attributeName: 'cbc:PriceTypeCode', min: 0, max: 1, classRef: UnqualifiedDataTypes_1.UdtCode },
    priceType: { order: 5, attributeName: 'cbc:PriceType', min: 0, max: 1, classRef: UnqualifiedDataTypes_1.UdtText },
    orderableUnitFactorRate: {
        order: 6,
        attributeName: 'cbc:OrderableUnitFactorRate',
        min: 0,
        max: 1,
        classRef: UdtRate_1.UdtRate,
    },
    validityPeriods: { order: 7, attributeName: 'cac:ValidityPeriod', min: 0, max: 1, classRef: ValidityPeriod_1.ValidityPeriod },
    priceList: { order: 8, attributeName: 'cac:PriceList', min: 0, max: 1, classRef: PriceListTypeGroup_1.PriceList },
    allowanceCharges: {
        order: 9,
        attributeName: 'cac:AllowanceCharge',
        min: 0,
        max: undefined,
        classRef: AllowanceChargeTypeGroup_1.AllowanceCharge,
    },
    pricingExchangeRate: {
        order: 9,
        attributeName: 'cac:PricingExchangeRate',
        min: 0,
        max: 1,
        classRef: ExchangeRateTypeGroup_1.PricingExchangeRate,
    },
    // ##################################  TODO CAC MISSING ################################################
    // postalAddress: { order: 10,  attributeName: 'cac:PostalAddress', min: 0, max: 1, classRef: PostalAddress }, //
    // ##################################  TODO CAC MISSING ################################################
};
/**
 *
 */
class Price extends GenericAggregateComponent_1.default {
    constructor(content) {
        super(content, ParamsMap, 'cac:Price');
    }
    setPriceAmount(value) {
        this.attributes.priceAmount = value instanceof UdtAmount_1.UdtAmount ? value : new UdtAmount_1.UdtAmount(value);
    }
    /**
     *
     * @param {boolean} [rawValue=true]
     */
    getPriceAmount(rawValue = true) {
        return rawValue ? this.attributes.priceAmount.content : this.attributes.priceAmount;
    }
    /**
     *
     * @param { UdtQuantity | string | number} value
     */
    setBaseQuantity(value) {
        this.attributes.baseQuantity = value instanceof UnqualifiedDataTypes_1.UdtQuantity ? value : new UnqualifiedDataTypes_1.UdtQuantity(value);
    }
    /**
     *
     * @param {boolean} rawValue
     */
    getBaseQuantity(rawValue = true) {
        return rawValue ? this.attributes.baseQuantity.content : this.attributes.baseQuantity;
    }
}
exports.Price = Price;
