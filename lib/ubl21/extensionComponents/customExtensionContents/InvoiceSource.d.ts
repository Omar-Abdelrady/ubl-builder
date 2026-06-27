import GenericAggregateComponent from '../../CommonAggregateComponents/GenericAggregateComponent';
import { UdtCode } from '../../types/UnqualifiedDataTypes';
type AllowedParams = {
    identificationCode?: string | UdtCode | any;
};
/**
 * Body of Dian extension content
 */
declare class InvoiceSource extends GenericAggregateComponent {
    /**     *
     * @param {AllowedParams} content
     * @param {string} name
     */
    constructor(content: AllowedParams);
}
export { InvoiceSource, AllowedParams as InvoiceSourceParams };
