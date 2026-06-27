"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrepaidPayment = exports.PaymentType = void 0;
const GenericAggregateComponent_1 = require("./GenericAggregateComponent");
const UnqualifiedDataTypes_1 = require("../types/UnqualifiedDataTypes");
const UdtAmount_1 = require("../types/UnqualifiedDataTypes/UdtAmount");
/*
  1  cbc:ID [0..1]    An identifier for this payment.
  2  cbc:PaidAmount [0..1]    The amount of this payment.
  3  cbc:ReceivedDate [0..1]    The date on which this payment was received.
  4  cbc:PaidDate [0..1]    The date on which this payment was made.
  5  cbc:PaidTime [0..1]    The time at which this payment was made.
  6  cbc:InstructionID [0..1]    An identifier for the payment instruction.
*/
const ParamsMap = {
    id: { order: 1, attributeName: 'cbc:ID', min: 0, max: 1, classRef: UnqualifiedDataTypes_1.UdtIdentifier },
    paidAmount: { order: 2, attributeName: 'cbc:PaidAmount', min: 0, max: 1, classRef: UdtAmount_1.UdtAmount },
    receivedDate: { order: 3, attributeName: 'cbc:ReceivedDate', min: 0, max: 1, classRef: UnqualifiedDataTypes_1.UdtDate },
    paidDate: { order: 4, attributeName: 'cbc:PaidDate', min: 0, max: 1, classRef: UnqualifiedDataTypes_1.UdtDate },
    paidTime: { order: 5, attributeName: 'cbc:PaidTime', min: 0, max: 1, classRef: UnqualifiedDataTypes_1.UdtTime },
    instructionID: { order: 6, attributeName: 'cbc:InstructionID', min: 0, max: 1, classRef: UnqualifiedDataTypes_1.UdtIdentifier },
};
/**
 *
 */
class PaymentType extends GenericAggregateComponent_1.default {
    constructor(content) {
        super(content, ParamsMap, 'cac:PaymentType');
    }
}
exports.PaymentType = PaymentType;
exports.PrepaidPayment = PaymentType;
