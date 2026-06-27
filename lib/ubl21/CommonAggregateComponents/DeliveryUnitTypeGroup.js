"use strict";
// 'use strict'
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaximumDeliveryUnit = exports.MinimumDeliveryUnit = exports.DeliveryUnit = void 0;
const GenericAggregateComponent_1 = require("./GenericAggregateComponent");
const UnqualifiedDataTypes_1 = require("../types/UnqualifiedDataTypes");
/*

cbc:BatchQuantity [1..1]    The quantity of ordered Items that constitutes a batch for delivery purposes.
cbc:ConsumerUnitQuantity [0..1]    The quantity of units in the Delivery Unit expressed in the units used by the consumer.
cbc:HazardousRiskIndicator [0..1]    An indication that the transported goods are subject to an international regulation concerning the carriage of dangerous goods (true) or not (false).

*/
const ParamsMap = {
    batchQuantity: { order: 1, attributeName: 'cbc:BatchQuantity', min: 0, max: 1, classRef: UnqualifiedDataTypes_1.UdtQuantity },
    consumerUnitQuantity: { order: 1, attributeName: 'cbc:ConsumerUnitQuantity', min: 0, max: 1, classRef: UnqualifiedDataTypes_1.UdtQuantity },
    hazardousRiskIndicator: {
        order: 1,
        attributeName: 'cbc:HazardousRiskIndicator',
        min: 0,
        max: 1,
        classRef: UnqualifiedDataTypes_1.UdtIndicator,
    },
};
/**
 *
 */
class DeliveryUnitType extends GenericAggregateComponent_1.default {
    constructor(content) {
        super(content, ParamsMap, 'cac:DeliveryUnitType');
    }
}
exports.DeliveryUnit = DeliveryUnitType;
exports.MinimumDeliveryUnit = DeliveryUnitType;
exports.MaximumDeliveryUnit = DeliveryUnitType;
