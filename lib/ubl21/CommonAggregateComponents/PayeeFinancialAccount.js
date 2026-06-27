"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PayeeFinancialAccount = void 0;
const GenericAggregateComponent_1 = require("./GenericAggregateComponent");
const UnqualifiedDataTypes_1 = require("../types/UnqualifiedDataTypes");
const FinancialInstitutionBranch_1 = require("./FinancialInstitutionBranch");
const ParamsMap = {
    id: { order: 1, attributeName: 'cbc:ID', min: 0, max: 1, classRef: UnqualifiedDataTypes_1.UdtIdentifier },
    financialInstitutioBranch: {
        order: 2,
        attributeName: 'cac:FinancialInstitutionBranch',
        min: 0,
        max: 1,
        classRef: FinancialInstitutionBranch_1.FinancialInstitutionBranch,
    },
};
class PayeeFinancialAccount extends GenericAggregateComponent_1.default {
    /**
     *
     * @param content
     */
    constructor(content) {
        super(content, ParamsMap, 'cac:PayeeFinancialAccount');
    }
}
exports.PayeeFinancialAccount = PayeeFinancialAccount;
