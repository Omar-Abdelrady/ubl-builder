import GenericAggregateComponent from './GenericAggregateComponent';
import { UdtIdentifier } from '../types/UnqualifiedDataTypes';
type AllowedParams = {
    id: string | UdtIdentifier;
};
/**
 *
 */
declare class FinancialInstitutionBranch extends GenericAggregateComponent {
    constructor(content: AllowedParams);
}
export { FinancialInstitutionBranch, AllowedParams as FinancialInstitutionBranchParams };
