"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CorporateRegistrationScheme = void 0;
const GenericAggregateComponent_1 = require("./GenericAggregateComponent");
const UnqualifiedDataTypes_1 = require("../types/UnqualifiedDataTypes");
const AddressTypeGroup_1 = require("./AddressTypeGroup");
/*
    1  cbc:ID [0..1]    An identifier for this registration scheme.
    2  cbc:Name [0..1]    The name of this registration scheme.
    3  cbc:CorporateRegistrationTypeCode [0..1]    A code signifying the type of this registration scheme.
    4  cac:JurisdictionRegionAddress [0..*]    A geographic area in which this registration scheme applies.
*/
const ParamsMap = {
    id: { order: 1, attributeName: 'cbc:ID', min: 0, max: 1, classRef: UnqualifiedDataTypes_1.UdtIdentifier },
    name: { order: 2, attributeName: 'cbc:Name', min: 0, max: 1, classRef: UnqualifiedDataTypes_1.UdtName },
    corporateRegistrationTypeCode: {
        order: 3,
        attributeName: 'cbc:CorporateRegistrationTypeCode',
        min: 0,
        max: 1,
        classRef: UnqualifiedDataTypes_1.UdtCode,
    },
    jurisdictionRegionAddresses: {
        order: 4,
        attributeName: 'cac:JurisdictionRegionAddress',
        min: 0,
        max: undefined,
        classRef: AddressTypeGroup_1.JurisdictionRegionAddress,
    },
    // ##################################  TODO CAC MISSING ################################################
    // postalAddress: { order: 10,  attributeName: 'cac:PostalAddress', min: 0, max: 1, classRef: PostalAddress }, //
    // ##################################  TODO CAC MISSING ################################################
};
/**
 *
 */
class CorporateRegistrationScheme extends GenericAggregateComponent_1.default {
    constructor(content) {
        super(content, ParamsMap, 'cac:CorporateRegistrationScheme');
    }
    /**
     *
     * @param value
     */
    addJurisdictionRegionAddress(value) {
        if (!this.attributes.jurisdictionRegionAddresses) {
            this.attributes.jurisdictionRegionAddresses = [];
        }
        if (value instanceof AddressTypeGroup_1.JurisdictionRegionAddress) {
            this.attributes.jurisdictionRegionAddresses.push(value);
        }
        else {
            throw new Error('value must to be instance of JurisdictionRegionAddress');
        }
    }
}
exports.CorporateRegistrationScheme = CorporateRegistrationScheme;
