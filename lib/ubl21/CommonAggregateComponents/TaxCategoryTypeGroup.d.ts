import GenericAggregateComponent, { IGenericKeyValue, ParamsMapValues } from './GenericAggregateComponent';
import { UdtIdentifier, UdtName, UdtCode, UdtText, UdtMeasure } from '../types/UnqualifiedDataTypes';
import { UdtPercent } from '../types/UnqualifiedDataTypes/UdtPercent';
import { UdtAmount } from '../types/UnqualifiedDataTypes/UdtAmount';
import { TaxScheme } from './TaxScheme';
import { TaxCategoryType } from './TaxCategoryType';
declare const ParamsMap: IGenericKeyValue<ParamsMapValues>;
type AllowedParams = {
    id: string | UdtIdentifier;
    name?: string | UdtName;
    percent: string | UdtPercent;
    baseUnitMeasure?: string | UdtMeasure;
    perUnitAmount?: string | UdtAmount;
    taxExemptionReasonCode?: string | UdtCode;
    taxExemptionReason?: string | UdtText;
    tierRange?: string | UdtText;
    tierRatePercent?: string | UdtPercent;
    taxScheme?: TaxScheme;
};
/**
 *
 */
declare class ClassifiedTaxCategoryType extends GenericAggregateComponent {
    constructor(content: AllowedParams);
    setPercent(value: string | UdtPercent): void;
    /**
     * @returns { string | UdtPercent }
     */
    getPercent(rawValue?: boolean): any;
    getTaxScheme(): TaxScheme;
}
export { TaxCategoryType as TaxCategory, AllowedParams as TaxCategoryTypeParams, ClassifiedTaxCategoryType as ClassifiedTaxCategory, AllowedParams as ClassifiedTaxCategoryTypeParams, ParamsMap as TaxCategoryTypeParamsMap, };
