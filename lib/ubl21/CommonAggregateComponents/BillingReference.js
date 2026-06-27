"use strict";
// 'use strict'
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillingReference = void 0;
const GenericAggregateComponent_1 = require("./GenericAggregateComponent");
const DocumentReferenceGroup_1 = require("./DocumentReferenceGroup");
const ParamsMap = {
    invoiceDocumentReference: {
        order: 1,
        attributeName: 'cac:InvoiceDocumentReference',
        min: 0,
        max: 1,
        classRef: DocumentReferenceGroup_1.InvoiceDocumentReference,
    },
    //                                   TODO CAC MISSING
    // selfBilledInvoiceDocumentReference: { order: 2, attributeName: 'cac:SelfBilledInvoiceDocumentReference', min: 0, max:1, classRef: null },
    // creditNoteDocumentReference: { order: 3, attributeName: 'cac:CreditNoteDocumentReference', min: 0, max:1, classRef: null },
    // selfBilledCreditNoteDocumentReference: { order: 4, attributeName: 'cac:SelfBilledCreditNoteDocumentReference', min: 0, max:1, classRef: null },
    // debitNoteDocumentReference: { order: 5, attributeName: 'cac:DebitNoteDocumentReference', min: 0, max:1, classRef: null },
    // reminderDocumentReference: { order: 6, attributeName: 'cac:ReminderDocumentReference', min: 0, max:1, classRef: null },
    // additionalDocumentReference: { order: 7, attributeName: 'cac:AdditionalDocumentReference', min: 0, max:1, classRef: null },
    // billingReferenceLine: { order: 8, attributeName: 'cac:BillingReferenceLine', min: 0, max:undefined, classRef: null },
    //                                   TODO CAC MISSING
};
/**
 * A class to define a reference to a billing document
 * More info http://www.datypic.com/sc/ubl21/e-cac_BillingReference.html
 */
class BillingReference extends GenericAggregateComponent_1.default {
    constructor(content) {
        super(content, ParamsMap, 'cac:BillingReference');
    }
    /**
     *
     * @param value
     */
    setInvoiceDocumentReference(value) {
        if (value instanceof DocumentReferenceGroup_1.InvoiceDocumentReference) {
            this.attributes.invoiceDocumentReference = value;
        }
        else {
            throw new Error('this action is not suported yet');
        }
        return this;
    }
}
exports.BillingReference = BillingReference;
