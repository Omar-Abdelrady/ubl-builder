"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SoftwareProvider = void 0;
const GenericAggregateComponent_1 = require("../../CommonAggregateComponents/GenericAggregateComponent");
const UnqualifiedDataTypes_1 = require("../../types/UnqualifiedDataTypes");
const ParamsMap = {
    providerID: { order: 1, attributeName: 'sts:ProviderID', min: 0, max: 1, classRef: UnqualifiedDataTypes_1.UdtIdentifier },
    softwareID: { order: 2, attributeName: 'sts:SoftwareID', min: 0, max: 1, classRef: UnqualifiedDataTypes_1.UdtIdentifier },
};
/**
 * Body of Dian extension content
 */
class SoftwareProvider extends GenericAggregateComponent_1.default {
    /**     *
     * @param {AllowedParams} content
     * @param {string} name
     */
    constructor(content) {
        super(content, ParamsMap, 'sts:SoftwareProvider');
    }
}
exports.SoftwareProvider = SoftwareProvider;
