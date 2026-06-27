"use strict";
// 'use strict'
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvoiceSource = void 0;
const GenericAggregateComponent_1 = require("../../CommonAggregateComponents/GenericAggregateComponent");
const UnqualifiedDataTypes_1 = require("../../types/UnqualifiedDataTypes");
// const GenericAggregateComponent = require("../../CommonAggregateComponents/GenericAggregateComponent");
// /* TODO GANERIC CLASSES */
// const { UdtCode } = require("../../types/UnqualifiedDataTypes");
const ParamsMap = {
    identificationCode: { order: 1, attributeName: 'cbc:IdentificationCode', min: 0, max: 1, classRef: UnqualifiedDataTypes_1.UdtCode },
};
/**
 * Body of Dian extension content
 */
class InvoiceSource extends GenericAggregateComponent_1.default {
    /**     *
     * @param {AllowedParams} content
     * @param {string} name
     */
    constructor(content) {
        super(content, ParamsMap, 'sts:InvoiceSource');
    }
}
exports.InvoiceSource = InvoiceSource;
