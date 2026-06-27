"use strict";
// 'use strict'
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvoiceControl = void 0;
const GenericAggregateComponent_1 = require("../../CommonAggregateComponents/GenericAggregateComponent");
const UnqualifiedDataTypes_1 = require("../../types/UnqualifiedDataTypes");
const CommonAggregateComponents_1 = require("../../CommonAggregateComponents");
const AuthorizedInvoices_1 = require("./AuthorizedInvoices");
const ParamsMap = {
    // ##################################  TODO CAC MISSING ################################################
    invoiceAuthorization: { order: 1, attributeName: 'sts:InvoiceAuthorization', min: 0, max: 1, classRef: UnqualifiedDataTypes_1.UdtText },
    authorizationPeriod: { order: 2, attributeName: 'sts:AuthorizationPeriod', min: 0, max: 1, classRef: CommonAggregateComponents_1.PeriodType },
    authorizedInvoices: {
        order: 3,
        attributeName: 'sts:AuthorizedInvoices',
        min: 0,
        max: 1,
        classRef: AuthorizedInvoices_1.AuthorizedInvoices,
    },
};
/**
 * Body of Dian extension content
 */
class InvoiceControl extends GenericAggregateComponent_1.default {
    /**     *
     * @param {AllowedParams} content
     * @param {string} name
     */
    constructor(content) {
        super(content, ParamsMap, 'sts:InvoiceControl');
    }
}
exports.InvoiceControl = InvoiceControl;
