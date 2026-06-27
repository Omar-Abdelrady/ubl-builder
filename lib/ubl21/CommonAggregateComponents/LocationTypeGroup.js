"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DespatchLocation = exports.AlternativeDeliveryLocation = exports.DeliveryLocation = exports.PhysicalLocation = void 0;
const GenericAggregateComponent_1 = require("./GenericAggregateComponent");
const UnqualifiedDataTypes_1 = require("../types/UnqualifiedDataTypes");
const ValidityPeriod_1 = require("./ValidityPeriod");
const AddressTypeGroup_1 = require("./AddressTypeGroup");
/*http://www.datypic.com/sc/ubl21/e-cac_PhysicalLocation.html
cbc:ID [0..1]    An identifier for this location, e.g., the EAN Location Number, GLN.
cbc:Description [0..*]    Text describing this location.
cbc:Conditions [0..*]    Free-form text describing the physical conditions of the location.
cbc:CountrySubentity [0..1]    A territorial division of a country, such as a county or state, expressed as text.
cbc:CountrySubentityCode [0..1]    A territorial division of a country, such as a county or state, expressed as a code.
cbc:LocationTypeCode [0..1]    A code signifying the type of location.
cbc:InformationURI [0..1]    The Uniform Resource Identifier (URI) of a document providing information about this location.
cbc:Name [0..1]    The name of this location.
cac:ValidityPeriod [0..*]    A period during which this location can be used (e.g., for delivery).
cac:Address [0..1]    The address of this location.
cac:SubsidiaryLocation [0..*]    A location subsidiary to this location.
cac:LocationCoordinate [0..*]    The geographical coordinates of this location.
*/
const ParamsMap = {
    id: { order: 1, attributeName: 'cbc:ID', min: 0, max: 1, classRef: UnqualifiedDataTypes_1.UdtIdentifier },
    description: { order: 2, attributeName: 'cbc:Description', min: 0, max: undefined, classRef: UnqualifiedDataTypes_1.UdtText },
    conditions: { order: 3, attributeName: 'cbc:Conditions', min: 0, max: undefined, classRef: UnqualifiedDataTypes_1.UdtText },
    countrySubentity: { order: 4, attributeName: 'cbc:CountrySubentity', min: 0, max: 1, classRef: UnqualifiedDataTypes_1.UdtText },
    countrySubentityCode: { order: 5, attributeName: 'cbc:CountrySubentityCode', min: 0, max: 1, classRef: UnqualifiedDataTypes_1.UdtCode },
    locationTypeCode: { order: 6, attributeName: 'cbc:LocationTypeCode', min: 0, max: 1, classRef: UnqualifiedDataTypes_1.UdtCode },
    informationURI: { order: 7, attributeName: 'cbc:InformationURI', min: 0, max: 1, classRef: UnqualifiedDataTypes_1.UdtIdentifier },
    name: { order: 8, attributeName: 'cbc:Name', min: 0, max: 1, classRef: UnqualifiedDataTypes_1.UdtName },
    validityPeriod: { order: 9, attributeName: 'cac:ValidityPeriod', min: 0, max: undefined, classRef: ValidityPeriod_1.ValidityPeriod },
    address: { order: 10, attributeName: 'cac:Address', min: 0, max: 1, classRef: AddressTypeGroup_1.Address },
    // ##################################  TODO CAC MISSING ################################################
    // markCareIndicator: { order: 11,  attributeName: 'cbc:MarkCareIndicator', min: 0, max:1, classRef: null  },
    // markCareIndicator: { order: 12,  attributeName: 'cbc:MarkCareIndicator', min: 0, max:1, classRef: null }
    // ##################################  TODO CAC MISSING ################################################
};
/**
 *
 */
class LocationType extends GenericAggregateComponent_1.default {
    constructor(content) {
        super(content, ParamsMap, 'cac:LocationType');
    }
    /**
     *
     * @param value
     */
    setAddress(value) {
        if (!(value instanceof AddressTypeGroup_1.Address))
            throw new Error('Value must be instance of Address');
        this.attributes.address = value;
    }
}
exports.PhysicalLocation = LocationType;
exports.DeliveryLocation = LocationType;
exports.AlternativeDeliveryLocation = LocationType;
exports.DespatchLocation = LocationType;
