"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Country = void 0;
const GenericAggregateComponent_1 = require("./GenericAggregateComponent");
/* TODO GENERIC CLASSES */
const UnqualifiedDataTypes_1 = require("../types/UnqualifiedDataTypes");
const ParamsMap = {
    identificationCode: { order: 1, attributeName: 'cbc:IdentificationCode', min: 0, max: 1, classRef: UnqualifiedDataTypes_1.UdtCode },
    name: { order: 2, attributeName: 'cbc:Name', min: 0, max: 1, classRef: UnqualifiedDataTypes_1.UdtName },
};
/**
 * A class to describe a country.
 */
class CountryType extends GenericAggregateComponent_1.default {
    /**
     * @param {AllowedParams} content
     * @param {string} name
     */
    constructor(content) {
        super(content, ParamsMap, 'cac:CountryType');
    }
}
exports.Country = CountryType;
