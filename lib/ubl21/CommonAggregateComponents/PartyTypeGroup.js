"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DespatchParty = exports.NotifyParty = exports.DeliveryParty = exports.CarrierParty = exports.TaxRepresentativeParty = exports.IssuerParty = exports.Party = void 0;
const GenericAggregateComponent_1 = require("./GenericAggregateComponent");
const UnqualifiedDataTypes_1 = require("../types/UnqualifiedDataTypes");
const PartyIdentification_1 = require("./PartyIdentification");
const PartyName_1 = require("./PartyName");
const Language_1 = require("./Language");
const LocationTypeGroup_1 = require("./LocationTypeGroup");
const PartyTaxScheme_1 = require("./PartyTaxScheme");
const PartyLegalEntity_1 = require("./PartyLegalEntity");
const ContactTypeGroup_1 = require("./ContactTypeGroup");
const PostalAddressTypeGroup_1 = require("./PostalAddressTypeGroup");
/*
    cbc:MarkCareIndicator [0..1]    An indicator that this party is "care of" (c/o) (true) or not (false).
    cbc:MarkAttentionIndicator [0..1]    An indicator that this party is "for the attention of" (FAO) (true) or not (false).
    cbc:WebsiteURI [0..1]    The Uniform Resource Identifier (URI) that identifies this party's web site; i.e., the web site's Uniform Resource Locator (URL).
    cbc:LogoReferenceID [0..1]    An identifier for this party's logo.
    cbc:EndpointID [0..1]    An identifier for the end point of the routing service (e.g., EAN Location Number, GLN).
    cbc:IndustryClassificationCode [0..1]    This party's Industry Classification Code.
    cac:PartyIdentification [0..*]    An identifier for this party.
    cac:PartyName [0..*]    A name for this party.
    cac:Language [0..1]    The language associated with this party.
    cac:PostalAddress [0..1]    The party's postal address.
    cac:PhysicalLocation [0..1]    The physical location of this party.
    cac:PartyTaxScheme [0..*]    A tax scheme applying to this party.
    cac:PartyLegalEntity [0..*]    A description of this party as a legal entity.
    cac:Contact [0..1]    The primary contact for this party.
    cac:Person [0..*]    A person associated with this party.
    cac:AgentParty [0..1]    A party who acts as an agent for this party.
    cac:ServiceProviderParty [0..*]    A party providing a service to this party.
    cac:PowerOfAttorney [0..*]    A power of attorney associated with this party.
    cac:FinancialAccount [0..1]    The financial account associated with this party.
*/
const ParamsMap = {
    markCareIndicator: { order: 1, attributeName: 'cbc:MarkCareIndicator', min: 0, max: 1, classRef: UnqualifiedDataTypes_1.UdtIndicator },
    markAttentionIndicator: {
        order: 2,
        attributeName: 'cbc:MarkAttentionIndicator',
        min: 0,
        max: 1,
        classRef: UnqualifiedDataTypes_1.UdtIndicator,
    },
    websiteURI: { order: 3, attributeName: 'cbc:WebsiteURI', min: 0, max: 1, classRef: UnqualifiedDataTypes_1.UdtIdentifier },
    logoReferenceID: { order: 4, attributeName: 'cbc:LogoReferenceID', min: 0, max: 1, classRef: UnqualifiedDataTypes_1.UdtIdentifier },
    EndpointID: { order: 5, attributeName: 'cbc:EndpointID', min: 0, max: 1, classRef: UnqualifiedDataTypes_1.UdtIdentifier },
    industryClassificationCode: {
        order: 6,
        attributeName: 'cbc:IndustryClassificationCode',
        min: 0,
        max: 1,
        classRef: UnqualifiedDataTypes_1.UdtCode,
    },
    partyIdentifications: {
        order: 7,
        attributeName: 'cac:PartyIdentification',
        min: 0,
        max: undefined,
        classRef: PartyIdentification_1.PartyIdentification,
    },
    partyNames: { order: 8, attributeName: 'cac:PartyName', min: 0, max: undefined, classRef: PartyName_1.PartyName },
    language: { order: 9, attributeName: 'cac:Language', min: 0, max: 1, classRef: Language_1.Language },
    postalAddress: { order: 10, attributeName: 'cac:PostalAddress', min: 0, max: 1, classRef: PostalAddressTypeGroup_1.PostalAddress }, //
    physicalLocation: { order: 11, attributeName: 'cac:PhysicalLocation', min: 0, max: 1, classRef: LocationTypeGroup_1.PhysicalLocation },
    partyTaxSchemes: { order: 12, attributeName: 'cac:PartyTaxScheme', min: 0, max: undefined, classRef: PartyTaxScheme_1.PartyTaxScheme },
    partyLegalEntities: {
        order: 13,
        attributeName: 'cac:PartyLegalEntity',
        min: 0,
        max: undefined,
        classRef: PartyLegalEntity_1.PartyLegalEntity,
    },
    contact: { order: 14, attributeName: 'cac:Contact', min: 0, max: 1, classRef: ContactTypeGroup_1.Contact },
    // person: { order: 15,  attributeName: 'cac:Person', min: 0, max: 1, classRef: PostalAddress },
    // serviceProviderParty: { order: 17,  attributeName: 'cac:ServiceProviderParty', min: 0, max: 1, classRef: ServiceProviderParty },
    // powerOfAttorney: { order: 18,  attributeName: 'cac:PowerOfAttorney', min: 0, max: 1, classRef: PowerOfAttorney },
    // financialAccount: { order: 19,  attributeName: 'cac:FinancialAccount', min: 0, max: 1, classRef: FinancialAccount },
    // ##################################  TODO CAC MISSING ################################################
};
/**
 * A class to describe an organization, sub-organization, or individual fulfilling a role in a business process.
 * More info http://www.datypic.com/sc/ubl21/e-cac_IssuerParty.html
 */
class Party extends GenericAggregateComponent_1.default {
    /**     *
     * @param {AllowedParams} content
     * @param {string} name
     */
    constructor(content) {
        super(content, ParamsMap, 'cac:IssueParty');
    }
    addPartyName(value) {
        if (!this.attributes.partyNames) {
            this.attributes.partyNames = [];
        }
        if (!(value instanceof PartyName_1.PartyName) && typeof value !== 'string') {
            throw new Error('Value must be instance of PartyName or a string');
        }
        const itemToPush = value instanceof PartyName_1.PartyName ? value : new PartyName_1.PartyName({ name: value });
        this.attributes.partyNames.push(itemToPush);
    }
    setPhysicalLocation(value) {
        if (!(value instanceof LocationTypeGroup_1.PhysicalLocation))
            throw new Error('Value must be instance of PhysicalLocation ');
        this.attributes.physicalLocation = value;
    }
    /**
     *
     * @param value
     */
    addPartyTaxScheme(value) {
        if (!this.attributes.partyTaxSchemes) {
            this.attributes.partyTaxSchemes = [];
        }
        const itemToPush = value instanceof PartyTaxScheme_1.PartyTaxScheme ? value : new PartyTaxScheme_1.PartyTaxScheme(value);
        this.attributes.partyTaxSchemes.push(itemToPush);
    }
    /**
     * @param { PartyLegalEntity } value
     */
    addPartyLegalEntity(value) {
        if (!this.attributes.partyLegalEntities)
            this.attributes.partyLegalEntities = [];
        if (value instanceof PartyLegalEntity_1.PartyLegalEntity) {
            this.attributes.partyLegalEntities.push(value);
        }
        else {
            throw new Error('Value must to be instance of PartyLegalEntity');
        }
    }
    /**
     *
     * @param value
     */
    setContact(value) {
        if (!(value instanceof ContactTypeGroup_1.Contact))
            throw new Error('Value must to be instance of Contact');
        this.attributes.contact = value;
    }
    addPartyIdentification(value) {
        if (!this.attributes.partyIdentifications) {
            this.attributes.partyIdentifications = [];
        }
        const itemToPush = value instanceof PartyIdentification_1.PartyIdentification ? value : new PartyIdentification_1.PartyIdentification(value);
        this.attributes.partyIdentifications.push(itemToPush);
    }
    /**
     * @returns { [PartyTaxScheme] } Taxscheme list
     */
    getTaxSchemes() {
        return this.attributes.partyTaxSchemes;
    }
}
exports.Party = Party;
exports.IssuerParty = Party;
exports.TaxRepresentativeParty = Party;
exports.CarrierParty = Party;
exports.DeliveryParty = Party;
exports.NotifyParty = Party;
exports.DespatchParty = Party;
