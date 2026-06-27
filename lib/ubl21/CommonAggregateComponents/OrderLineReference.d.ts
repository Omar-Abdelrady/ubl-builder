import GenericAggregateComponent from './GenericAggregateComponent';
import { UdtIdentifier } from '../types/UnqualifiedDataTypes';
import { OrderReference } from './OrderReference';
type AllowedParams = {
    lineID: string | UdtIdentifier;
    salesOrderLineID: string | UdtIdentifier;
    uuid: string | UdtIdentifier;
    lineStatusCode: string | UdtIdentifier;
    orderReference: OrderReference;
};
/**
 *
 */
declare class OrderLineReference extends GenericAggregateComponent {
    constructor(content: AllowedParams);
}
export { OrderLineReference, AllowedParams as OrderLineReferenceParams };
