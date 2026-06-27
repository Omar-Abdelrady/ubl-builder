"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountingSupplierParty = void 0;
const GenericAggregateComponent_1 = require("./GenericAggregateComponent");
const UnqualifiedDataTypes_1 = require("../types/UnqualifiedDataTypes");
const PartyTypeGroup_1 = require("./PartyTypeGroup");
/*
    cbc:CustomerAssignedAccountID [0..1]    An identifier for this supplier party, assigned by the customer.
    cbc:AdditionalAccountID [0..*]    An additional identifier for this supplier party.
    cbc:DataSendingCapability [0..1]    Text describing the supplier's ability to send invoice data via a purchase card provider (e.g., VISA, MasterCard, American Express).
    cac:Party [0..1]    The supplier party itself.
    cac:DespatchContact [0..1]    A contact at this supplier party for despatches (pickups).
    cac:AccountingContact [0..1]    A contact at this supplier party for accounting.
    cac:SellerContact [0..1]    The primary contact for this supplier party.
 */
const ParamsMap = {
    customerAssignedAccountID: {
        order: 1,
        attributeName: 'cbc:CustomerAssignedAccountID',
        min: 0,
        max: 1,
        classRef: UnqualifiedDataTypes_1.UdtIdentifier,
    },
    additionalAccountIDs: {
        order: 2,
        attributeName: 'cbc:AdditionalAccountID',
        min: 0,
        max: undefined,
        classRef: UnqualifiedDataTypes_1.UdtIdentifier,
    },
    dataSendingCapability: { order: 3, attributeName: 'cbc:DataSendingCapability', min: 0, max: 1, classRef: UnqualifiedDataTypes_1.UdtText },
    party: { order: 4, attributeName: 'cac:Party', min: 0, max: 1, classRef: PartyTypeGroup_1.Party },
    // ##################################  TODO CAC MISSING ################################################
    // despatchContact: { order: 5, attributeName: 'cac:DespatchContact', min: 0, max: 1, classRef: UdtText },
    // accountingContact: { order: 6, attributeName: 'cac:AccountingContact', min: 0, max: 1, classRef: UdtText },
    // sellerContact: { order: 7, attributeName: 'cac:SellerContact', min: 0, max: 1, classRef: UdtText },
    // ##################################  TODO CAC MISSING ################################################
};
class AccountingSupplierParty extends GenericAggregateComponent_1.default {
    constructor(content) {
        super(content, ParamsMap, 'cac:AccountingSupplierParty');
    }
    setParty(value) {
        this.attributes.party = value instanceof PartyTypeGroup_1.Party ? value : new PartyTypeGroup_1.Party(value);
    }
    /**
     * @returns {Party} The supplier party itself Information
     */
    getParty() {
        return this.attributes.party;
    }
    addAdditionalAccountID(value) {
        if (!this.attributes.additionalAccountIDs) {
            this.attributes.additionalAccountIDs = [];
        }
        const itemToPush = value instanceof UnqualifiedDataTypes_1.UdtIdentifier ? value : new UnqualifiedDataTypes_1.UdtIdentifier(value);
        this.attributes.additionalAccountIDs.push(itemToPush);
    }
}
exports.AccountingSupplierParty = AccountingSupplierParty;
