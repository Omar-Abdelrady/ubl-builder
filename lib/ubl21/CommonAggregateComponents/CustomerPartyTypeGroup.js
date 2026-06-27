"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountingCustomerParty = void 0;
const GenericAggregateComponent_1 = require("./GenericAggregateComponent");
const UnqualifiedDataTypes_1 = require("../types/UnqualifiedDataTypes");
const PartyTypeGroup_1 = require("./PartyTypeGroup");
const ContactTypeGroup_1 = require("./ContactTypeGroup");
/*

  1  cbc:CustomerAssignedAccountID [0..1]    An identifier for the customer's account, assigned by the customer itself.
  2  cbc:SupplierAssignedAccountID [0..1]    An identifier for the customer's account, assigned by the supplier.
  3  cbc:AdditionalAccountID [0..*]    An identifier for the customer's account, assigned by a third party.
  4  cac:Party [0..1]    The customer party itself.
  5  cac:DeliveryContact [0..1]    A customer contact for deliveries.
  6  cac:AccountingContact [0..1]    A customer contact for accounting.
  7  cac:BuyerContact [0..1]    A customer contact for purchasing.

*/
const ParamsMap = {
    customerAssignedAccountID: {
        order: 1,
        attributeName: 'cbc:CustomerAssignedAccountID',
        min: 0,
        max: 1,
        classRef: UnqualifiedDataTypes_1.UdtIdentifier,
    },
    SupplierAssignedAccountID: {
        order: 2,
        attributeName: 'cbc:SupplierAssignedAccountID',
        min: 0,
        max: 1,
        classRef: UnqualifiedDataTypes_1.UdtIdentifier,
    },
    additionalAccountIDs: {
        order: 3,
        attributeName: 'cbc:AdditionalAccountID',
        min: 0,
        max: undefined,
        classRef: UnqualifiedDataTypes_1.UdtIdentifier,
    },
    party: { order: 4, attributeName: 'cac:Party', min: 0, max: 1, classRef: PartyTypeGroup_1.Party },
    deliveryContact: { order: 5, attributeName: 'cac:DeliveryContact', min: 0, max: 1, classRef: ContactTypeGroup_1.DeliveryContact },
    accountingContact: { order: 6, attributeName: 'cac:AccountingContact', min: 0, max: 1, classRef: ContactTypeGroup_1.AccountingContact },
    buyerContact: { order: 7, attributeName: 'cac:BuyerContact', min: 0, max: 1, classRef: ContactTypeGroup_1.BuyerContact },
};
/**
 *
 */
class CustomerParty extends GenericAggregateComponent_1.default {
    constructor(content) {
        super(content, ParamsMap, 'cac:CustomerParty');
    }
    /**
     * @returns {Party} The supplier party itself Information
     */
    getParty() {
        return this.attributes.party;
    }
}
exports.AccountingCustomerParty = CustomerParty;
