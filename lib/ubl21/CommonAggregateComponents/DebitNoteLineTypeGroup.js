"use strict";
// 'use strict'
Object.defineProperty(exports, "__esModule", { value: true });
exports.DebitNoteLine = void 0;
const GenericAggregateComponent_1 = require("./GenericAggregateComponent");
const UnqualifiedDataTypes_1 = require("../types/UnqualifiedDataTypes");
const UdtAmount_1 = require("../types/UnqualifiedDataTypes/UdtAmount");
const LineReferenceTypeGroup_1 = require("./LineReferenceTypeGroup");
const BillingReference_1 = require("./BillingReference");
const DocumentReferenceGroup_1 = require("./DocumentReferenceGroup");
const DeliveryTypeGroup_1 = require("./DeliveryTypeGroup");
const TaxTotalTypeGroup_1 = require("./TaxTotalTypeGroup");
const ItemTypeGroup_1 = require("./ItemTypeGroup");
const PriceTypeGroup_1 = require("./PriceTypeGroup");
/*
  01 cbc:ID [1..1]    An identifier for this debit note line.
  02 cbc:UUID [0..1]    A universally unique identifier for this debit note line.
  03 cbc:Note [0..*]    Free-form text conveying information that is not contained explicitly in other structures.
  04 cbc:DebitedQuantity [0..1]    The quantity of Items debited in this debit note line.
  05 cbc:LineExtensionAmount [1..1]    The total amount for this debit note line, including allowance charges but net of taxes.
  06 cbc:TaxPointDate [0..1]    The date of this debit note line, used to indicate the point at which tax becomes applicable.
  07 cbc:AccountingCostCode [0..1]    The buyer's accounting cost centre for this debit note line, expressed as a code.
  08 cbc:AccountingCost [0..1]    The buyer's accounting cost centre for this debit note line, expressed as text.
  09 cbc:PaymentPurposeCode [0..1]    A code signifying the business purpose for this payment.
  10 cac:DiscrepancyResponse [0..*]    A reason for the debit.
  11 cac:DespatchLineReference [0..*]    A reference to a despatch line associated with this debit note line.
  12 cac:ReceiptLineReference [0..*]    A reference to a receipt line associated with this debit note line.
  13 cac:BillingReference [0..*]    A reference to a billing document associated with this debit note line.
  14 cac:DocumentReference [0..*]    A reference to a document associated with this debit note line.
  15 cac:PricingReference [0..1]    A reference to pricing and item location information associated with this debit note line.
  16 cac:Delivery [0..*]    A delivery associated with this debit note line.
  17 cac:TaxTotal [0..*]    A total amount of taxes of a particular kind applicable to this debit note line.
  18 cac:AllowanceCharge [0..*]    An allowance or charge associated with this debit note.
  19 cac:Item [0..1]    The item associated with this debit note line.
  20 cac:Price [0..1]    The price of the item associated with this debit note line.
  21 cac:SubDebitNoteLine [0..*]    A recursive description of a debit note line subsidiary to this debit note line.
*/
// ##################################  TODO CAC MISSING ################################################
const ParamsMap = {
    id: { order: 1, attributeName: 'cbc:ID', min: 1, max: 1, classRef: UnqualifiedDataTypes_1.UdtIdentifier },
    uuid: { order: 2, attributeName: 'cbc:UUID', min: 0, max: 1, classRef: UnqualifiedDataTypes_1.UdtIdentifier },
    notes: { order: 3, attributeName: 'cbc:Note', min: 0, max: undefined, classRef: UnqualifiedDataTypes_1.UdtText },
    debitedQuantity: { order: 4, attributeName: 'cbc:DebitedQuantity', min: 0, max: 1, classRef: UnqualifiedDataTypes_1.UdtQuantity },
    lineExtensionAmount: { order: 5, attributeName: 'cbc:LineExtensionAmount', min: 0, max: 1, classRef: UdtAmount_1.UdtAmount },
    taxPointDate: { order: 6, attributeName: 'cbc:TaxPointDate', min: 0, max: 1, classRef: UnqualifiedDataTypes_1.UdtDate },
    accountingCostCode: { order: 7, attributeName: 'cbc:AccountingCostCode', min: 0, max: 1, classRef: UnqualifiedDataTypes_1.UdtCode },
    accountingCost: { order: 8, attributeName: 'cbc:AccountingCost', min: 0, max: 1, classRef: UnqualifiedDataTypes_1.UdtText },
    paymentPurposeCode: { order: 9, attributeName: 'cbc:PaymentPurposeCode', min: 0, max: 1, classRef: UnqualifiedDataTypes_1.UdtCode },
    // discrepancyResponses: { order: 10,  attributeName: 'cbc:DiscrepancyResponse', min: 0, max: undefined, classRef: undefined },
    despatchLineReferences: {
        order: 11,
        attributeName: 'cac:DespatchLineReference',
        min: 0,
        max: undefined,
        classRef: LineReferenceTypeGroup_1.DespatchLineReference,
    },
    receiptLineReferences: {
        order: 12,
        attributeName: 'cac:ReceiptLineReference',
        min: 0,
        max: undefined,
        classRef: LineReferenceTypeGroup_1.ReceiptLineReference,
    },
    billingReferences: {
        order: 13,
        attributeName: 'cac:BillingReference',
        min: 0,
        max: undefined,
        classRef: BillingReference_1.BillingReference,
    },
    documentReferences: {
        order: 14,
        attributeName: 'cac:DocumentReference',
        min: 0,
        max: undefined,
        classRef: DocumentReferenceGroup_1.DocumentReference,
    },
    // pricingReference: { order: 15,  attributeName: 'cac:PricingReference', min: 0, max: 1, classRef: undefined },
    deliveries: { order: 16, attributeName: 'cac:Delivery', min: 0, max: undefined, classRef: DeliveryTypeGroup_1.Delivery },
    taxTotals: { order: 17, attributeName: 'cac:TaxTotal', min: 0, max: undefined, classRef: TaxTotalTypeGroup_1.TaxTotal },
    // allowanceCharges: { order: 18,  attributeName: 'cac:TaxTotal', min: 0, max: undefined, classRef: AllowanceCharge },
    item: { order: 19, attributeName: 'cac:Item', min: 0, max: 1, classRef: ItemTypeGroup_1.Item },
    price: { order: 20, attributeName: 'cac:Price', min: 0, max: 1, classRef: PriceTypeGroup_1.Price },
    // subDebitNoteLine: { order: 21,  attributeName: 'cac:SubDebitNoteLine', min: 0, max: undefined, classRef: undefined },
};
/**
 *
 */
class DebitNoteLineType extends GenericAggregateComponent_1.default {
    constructor(content) {
        super(content, ParamsMap, 'cac:DebitNoteLineType');
    }
    /**
     * @returns {TaxTotal}
     */
    getTaxTotals() {
        return this.attributes.taxTotals;
    }
    setId(value) {
        this.attributes.id = value instanceof UnqualifiedDataTypes_1.UdtIdentifier ? value : new UnqualifiedDataTypes_1.UdtIdentifier(value);
    }
}
exports.DebitNoteLine = DebitNoteLineType;
