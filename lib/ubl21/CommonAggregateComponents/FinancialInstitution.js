"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FinancialInstitution = void 0;
const GenericAggregateComponent_1 = require("./GenericAggregateComponent");
const UnqualifiedDataTypes_1 = require("../types/UnqualifiedDataTypes");
const ParamsMap = {
    id: { order: 1, attributeName: 'cbc:ID', min: 0, max: 1, classRef: UnqualifiedDataTypes_1.UdtIdentifier },
};
/**
 *
 */
class FinancialInstitution extends GenericAggregateComponent_1.default {
    constructor(content) {
        super(content, ParamsMap, 'cac:FinancialInstitution');
    }
}
exports.FinancialInstitution = FinancialInstitution;
