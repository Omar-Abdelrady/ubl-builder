import GenericAggregateComponent from './GenericAggregateComponent';
import { UdtIdentifier, UdtCode } from '../types/UnqualifiedDataTypes';
import { ValidityPeriod } from './ValidityPeriod';
type AllowedParams = {
    id: string | UdtIdentifier;
    statusCode: string | UdtCode;
    validityPeriods: ValidityPeriod;
};
/**
 *
 */
declare class PriceList extends GenericAggregateComponent {
    constructor(content: AllowedParams);
}
export { PriceList, AllowedParams as PriceListParams };
