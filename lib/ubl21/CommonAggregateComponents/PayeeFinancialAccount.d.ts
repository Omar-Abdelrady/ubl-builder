import GenericAggregateComponent from './GenericAggregateComponent';
import { UdtIdentifier } from '../types/UnqualifiedDataTypes';
import { FinancialInstitutionBranch } from './FinancialInstitutionBranch';
type AllowedParams = {
    id: string | UdtIdentifier;
    financialInstitutioBranch?: FinancialInstitutionBranch;
};
declare class PayeeFinancialAccount extends GenericAggregateComponent {
    /**
     *
     * @param content
     */
    constructor(content: AllowedParams);
}
export { PayeeFinancialAccount, AllowedParams as PayeeFinancialAccountParams };
