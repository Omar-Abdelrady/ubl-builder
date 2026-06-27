import GenericAggregateComponent from './GenericAggregateComponent';
import { TaxCategoryTypeParams as AllowedParams } from './TaxCategoryTypeGroup';
import { UdtPercent } from '../types/UnqualifiedDataTypes/UdtPercent';
import { TaxScheme } from './TaxScheme';
export declare class TaxCategoryType extends GenericAggregateComponent {
    constructor(content: AllowedParams);
    setPercent(value: string | UdtPercent): void;
    /**
     * @returns { string | UdtPercent }
     */
    getPercent(rawValue?: boolean): any;
    getTaxScheme(): TaxScheme;
}
