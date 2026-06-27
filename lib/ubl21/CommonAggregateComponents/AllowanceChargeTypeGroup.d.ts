import GenericAggregateComponent from './GenericAggregateComponent';
import { UdtCode, UdtIdentifier, UdtText, UdtIndicator, UdtAmount } from '../types/UnqualifiedDataTypes/';
import { TaxCategory } from './TaxCategoryTypeGroup';
type AllowedParams = {
    /**  An identifier for this allowance or charge */
    id?: string | UdtIdentifier;
    /** An indicator that this AllowanceCharge describes a charge (true) or a discount (false) */
    chargeIndicator: boolean | UdtIndicator;
    /** A mutually agreed code signifying the reason for this allowance or charge */
    allowanceChargeReasonCode: string | UdtCode;
    /** The reason for this allowance or charge */
    allowanceChargeReason: string | UdtText;
    amount: string | UdtAmount;
    baseAmount?: string | UdtAmount;
    taxCategory: TaxCategory;
};
/**
 *
 */
declare class AllowanceCharge extends GenericAggregateComponent {
    /**
     * @param {AllowedParams} content
     * @param {string} name
     */
    constructor(content: AllowedParams);
}
export { AllowanceCharge, AllowedParams as AllowanceChargeParams };
