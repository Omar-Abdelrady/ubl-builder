import GenericAggregateComponent from './GenericAggregateComponent';
import { UdtName } from '../types/UnqualifiedDataTypes';
type AllowedParams = {
    /** The name of the party */
    name: UdtName | string;
};
declare class PartyName extends GenericAggregateComponent {
    constructor(content: AllowedParams);
}
export { PartyName, AllowedParams as PartyNameParams };
