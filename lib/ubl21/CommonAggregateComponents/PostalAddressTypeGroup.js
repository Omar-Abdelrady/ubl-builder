"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostalAddress = void 0;
const GenericAggregateComponent_1 = require("./GenericAggregateComponent");
const UnqualifiedDataTypes_1 = require("../types/UnqualifiedDataTypes");
const CountryTypeGroup_1 = require("./CountryTypeGroup");
const AddressLine_1 = require("./AddressLine");
/*

0..1	cbc:StreetName
Seller address line 1
The main address line in an address.

Example value: Main Street 1

0..1	cbc:AdditionalStreetName
Seller address line 2
An additional address line in an address that can be used to give further details supplementing the main line.

Example value: Po Box 351

0..1	cbc:CityName
Seller city
The common name of the city, town or village, where the Seller address is located.

Example value: London

0..1	cbc:PostalZone
Seller post code
The identifier for an addressable group of properties according to the relevant postal service.

Example value: W1G 8LZ

0..1	cbc:CountrySubentity
Seller country subdivision
The subdivision of a country.

Example value: Region A

0..*	cac:AddressLine
ADDRESS LINE
1..1	cac:Country
COUNTRY
*/
const ParamsMap = {
    streetName: { order: 1, attributeName: 'cbc:StreetName', min: 0, max: 1, classRef: UnqualifiedDataTypes_1.UdtText },
    additionalStreetName: { order: 2, attributeName: 'cbc:AdditionalStreetName', min: 0, max: 1, classRef: UnqualifiedDataTypes_1.UdtText },
    cityName: { order: 3, attributeName: 'cbc:CityName', min: 0, max: 1, classRef: UnqualifiedDataTypes_1.UdtText },
    postalZone: { order: 4, attributeName: 'cbc:PostalZone', min: 0, max: 1, classRef: UnqualifiedDataTypes_1.UdtText },
    countrySubentity: { order: 5, attributeName: 'cbc:CountrySubentity', min: 0, max: 1, classRef: UnqualifiedDataTypes_1.UdtText },
    CountrySubentityCode: { order: 5, attributeName: 'cbc:CountrySubentityCode', min: 0, max: 1, classRef: UnqualifiedDataTypes_1.UdtText },
    addressLines: { order: 6, attributeName: 'cac:AddressLine', min: 0, max: undefined, classRef: AddressLine_1.AddressLine },
    country: { order: 7, attributeName: 'cac:Country', min: 0, max: 1, classRef: CountryTypeGroup_1.Country },
};
/**
 *
 */
class PostalAddressType extends GenericAggregateComponent_1.default {
    constructor(content) {
        super(content, ParamsMap, 'cac:PostalAddress');
    }
    /**
     * Add an address line to the postal address
     * @param value AddressLine instance or AddressLineParams object
     */
    addAddressLine(value) {
        if (!this.attributes.addressLines) {
            this.attributes.addressLines = [];
        }
        let itemToPush;
        if (value instanceof AddressLine_1.AddressLine) {
            itemToPush = value;
        }
        else if (typeof value === 'string') {
            itemToPush = new AddressLine_1.AddressLine({ line: value });
        }
        else {
            itemToPush = new AddressLine_1.AddressLine(value);
        }
        this.attributes.addressLines.push(itemToPush);
    }
}
exports.PostalAddress = PostalAddressType;
