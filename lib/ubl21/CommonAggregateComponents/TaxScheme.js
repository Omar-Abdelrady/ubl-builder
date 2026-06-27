"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaxScheme = void 0;
const GenericAggregateComponent_1 = require("./GenericAggregateComponent");
const UnqualifiedDataTypes_1 = require("../types/UnqualifiedDataTypes");
const AddressTypeGroup_1 = require("./AddressTypeGroup");
/*
  cbc:ID [0..1]    An identifier for this taxation scheme.
  cbc:Name [0..1]    The name of this taxation scheme.
  cbc:TaxTypeCode [0..1]    A code signifying the type of tax.
  cbc:CurrencyCode [0..1]    A code signifying the currency in which the tax is collected and reported.
  cac:JurisdictionRegionAddress [0..*]    A geographic area in which this taxation scheme applies.
*/
const ParamsMap = {
    id: { order: 1, attributeName: 'cbc:ID', min: 0, max: 1, classRef: UnqualifiedDataTypes_1.UdtIdentifier },
    name: { order: 2, attributeName: 'cbc:Name', min: 0, max: 1, classRef: UnqualifiedDataTypes_1.UdtName },
    taxTypeCode: { order: 3, attributeName: 'cbc:TaxTypeCode', min: 0, max: 1, classRef: UnqualifiedDataTypes_1.UdtCode },
    currencyCode: { order: 4, attributeName: 'cbc:CurrencyCode', min: 0, max: 1, classRef: UnqualifiedDataTypes_1.UdtCode },
    jurisdictionRegionAddress: {
        order: 5,
        attributeName: 'cac:JurisdictionRegionAddress',
        min: 0,
        max: 1,
        classRef: AddressTypeGroup_1.JurisdictionRegionAddress,
    },
};
/**
 * A class to describe a taxation scheme (e.g., VAT, State tax, County tax).
 */
class TaxScheme extends GenericAggregateComponent_1.default {
    constructor(content) {
        super(content, ParamsMap, 'cac:TaxScheme');
    }
    /**
     *
     * @param value
     */
    setId(value) {
        this.attributes.id = value instanceof UnqualifiedDataTypes_1.UdtIdentifier ? value : new UnqualifiedDataTypes_1.UdtIdentifier(value);
    }
    /**
     *  return Tax's id
     * @param rawValue
     */
    getId(rawValue = true) {
        return rawValue ? this.attributes.id.content : this.attributes.id;
    }
    /**
     *
     * @param value
     */
    setName(value) {
        this.attributes.name = value instanceof UnqualifiedDataTypes_1.UdtName ? value : new UnqualifiedDataTypes_1.UdtName(value);
    }
    /**
     *
     * @param {boolean} rawValue
     */
    getName(rawValue = true) {
        return rawValue ? this.attributes.name.content : this.attributes.name;
    }
}
exports.TaxScheme = TaxScheme;
