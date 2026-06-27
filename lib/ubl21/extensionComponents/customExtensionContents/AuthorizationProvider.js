"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorizationProvider = void 0;
const GenericAggregateComponent_1 = require("../../CommonAggregateComponents/GenericAggregateComponent");
const UdtIdentifier_1 = require("../../types/UnqualifiedDataTypes/UdtIdentifier");
const ParamsMap = {
    authorizationProviderID: {
        order: 1,
        attributeName: 'sts:AuthorizationProviderID',
        min: 0,
        max: 1,
        classRef: UdtIdentifier_1.UdtIdentifier,
    },
};
/**
 * Body of Dian extension content
 */
class AuthorizationProvider extends GenericAggregateComponent_1.default {
    /**     *
     * @param {AllowedParams} content
     * @param {string} name
     */
    constructor(content) {
        super(content, ParamsMap, 'sts:AuthorizationProvider');
    }
}
exports.AuthorizationProvider = AuthorizationProvider;
