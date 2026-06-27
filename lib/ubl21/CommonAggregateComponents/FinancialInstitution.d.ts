import GenericAggregateComponent from './GenericAggregateComponent';
import { UdtIdentifier } from '../types/UnqualifiedDataTypes';
type AllowedParams = {
    id: string | UdtIdentifier;
};
/**
 *
 */
declare class FinancialInstitution extends GenericAggregateComponent {
    constructor(content: AllowedParams);
}
export { FinancialInstitution, AllowedParams as FinancialInstitutionParams };
