"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorizedInvoices = void 0;
const GenericAggregateComponent_1 = require("../../CommonAggregateComponents/GenericAggregateComponent");
const UnqualifiedDataTypes_1 = require("../../types/UnqualifiedDataTypes");
const ParamsMap = {
    prefix: { order: 1, attributeName: 'sts:Prefix', min: 0, max: 1, classRef: UnqualifiedDataTypes_1.UdtText },
    from: { order: 2, attributeName: 'sts:From', min: 0, max: 1, classRef: UnqualifiedDataTypes_1.UdtText },
    to: { order: 3, attributeName: 'sts:To', min: 0, max: 1, classRef: UnqualifiedDataTypes_1.UdtText },
};
/**
 * Body of Dian extension content
 */
class AuthorizedInvoices extends GenericAggregateComponent_1.default {
    constructor(content) {
        super(content, ParamsMap, 'cac:DianExtensions');
    }
}
exports.AuthorizedInvoices = AuthorizedInvoices;
