import GenericAggregateComponent from './GenericAggregateComponent';
import { UdtAmount } from '../types/UnqualifiedDataTypes/UdtAmount';
type AllowedParams = {
    amount: string | UdtAmount;
};
/**
 *
 */
declare class ItemPriceExtension extends GenericAggregateComponent {
    constructor(content: AllowedParams);
}
export { ItemPriceExtension, AllowedParams as PriceParams };
