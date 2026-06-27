"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemPriceExtension = void 0;
const GenericAggregateComponent_1 = require("./GenericAggregateComponent");
const UdtAmount_1 = require("../types/UnqualifiedDataTypes/UdtAmount");
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
    amount: { order: 1, attributeName: 'cbc:Amount', min: 0, max: 1, classRef: UdtAmount_1.UdtAmount },
};
/**
 *
 */
class ItemPriceExtension extends GenericAggregateComponent_1.default {
    constructor(content) {
        super(content, ParamsMap, 'cac:ItemPriceExtension');
    }
}
exports.ItemPriceExtension = ItemPriceExtension;
