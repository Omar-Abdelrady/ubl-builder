import GenericAggregateComponent, { IGenericKeyValue, ParamsMapValues } from './GenericAggregateComponent';
import { UdtName } from '../types/UnqualifiedDataTypes';
declare const ParamsMap: IGenericKeyValue<ParamsMapValues>;
type AllowedParams = {
    itemClassificationCode?: string | UdtName;
};
/**
 *
 */
declare class CommodityClassificationType extends GenericAggregateComponent {
    constructor(content: AllowedParams);
}
export { AllowedParams as CommodityClassificationTypeParams, CommodityClassificationType as CommodityClassification, ParamsMap as CommodityClassificationTypeParamsMap, };
