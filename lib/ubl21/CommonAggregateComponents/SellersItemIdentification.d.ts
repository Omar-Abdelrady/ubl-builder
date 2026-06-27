import GenericAggregateComponent from './GenericAggregateComponent';
import { UdtIdentifier } from '../types/UnqualifiedDataTypes';
type AllowedParams = {
    id: string | UdtIdentifier;
};
/**
 *
 */
declare class SellersItemIdentification extends GenericAggregateComponent {
    constructor(content: AllowedParams);
}
export { SellersItemIdentification, AllowedParams as SellersItemIdentificationParams };
