"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceList = void 0;
const GenericAggregateComponent_1 = require("./GenericAggregateComponent");
const UnqualifiedDataTypes_1 = require("../types/UnqualifiedDataTypes");
const ValidityPeriod_1 = require("./ValidityPeriod");
/*
    http://www.datypic.com/sc/ubl21/t-cac_PriceListType.html
  1  cbc:ID [0..1]    An identifier for this price list.
  2  cbc:StatusCode [0..1]    A code signifying whether this price list is an original, copy, revision, or cancellation.
  3  cac:ValidityPeriod [0..*]    A period during which this price list is valid.
  4  cac:PreviousPriceList [0..1]    The previous price list.
*/
const ParamsMap = {
    id: { order: 1, attributeName: 'cbc:ID', min: 0, max: 1, classRef: UnqualifiedDataTypes_1.UdtIdentifier },
    statusCode: { order: 2, attributeName: 'cbc:StatusCode', min: 0, max: 1, classRef: UnqualifiedDataTypes_1.UdtCode },
    validityPeriods: { order: 3, attributeName: 'cac:ValidityPeriod', min: 0, max: 1, classRef: ValidityPeriod_1.ValidityPeriod },
    // id: { order: 1,  attributeName: 'cbc:ID', min: 0, max:1, classRef: UdtIdentifier },
    // ##################################  TODO CAC MISSING ################################################
};
/**
 *
 */
class PriceList extends GenericAggregateComponent_1.default {
    constructor(content) {
        super(content, ParamsMap, 'cac:PriceList');
    }
}
exports.PriceList = PriceList;
