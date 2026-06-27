import GenericAggregateComponent from './GenericAggregateComponent';
import { UdtText, UdtQuantity, UdtIndicator, UdtName } from '../types/UnqualifiedDataTypes';
import { UdtNumeric } from '../types/UnqualifiedDataTypes/UdtNumeric';
import { SellersItemIdentification } from './SellersItemIdentification';
import { ClassifiedTaxCategory } from './TaxCategoryTypeGroup';
import { CommodityClassification } from './CommodityClassificationTypeGroup';
type AllowedParams = {
    descriptions?: string[] | UdtText[];
    packQuantity?: string | UdtQuantity;
    packSizeNumeric?: string | UdtNumeric;
    catalogueIndicator?: string | UdtIndicator;
    name: string | UdtName;
    hazardousRiskIndicator?: string | UdtIndicator;
    additionalInformations?: string[] | UdtText[];
    keywords?: string[] | UdtText[];
    /** @type {UdtName} */
    brandName?: string | UdtName;
    modelName?: string | UdtName;
    sellersItemIdentification: SellersItemIdentification;
    classifiedTaxCategory: ClassifiedTaxCategory;
    commodityClassification: CommodityClassification;
};
/**
 *
 */
declare class ItemType extends GenericAggregateComponent {
    constructor(content: AllowedParams);
}
export { ItemType as Item, AllowedParams as ItemTypeParams, ItemType as SupplyItem };
