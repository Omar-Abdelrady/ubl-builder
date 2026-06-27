import GenericAggregateComponent from './GenericAggregateComponent';
import { UdtCode } from '../types/UnqualifiedDataTypes/UdtCode';
import { UdtDate } from '../types/UnqualifiedDataTypes/UdtDate';
import { UdtRate } from '../types/UnqualifiedDataTypes/UdtRate';
type AllowedParams = {
    sourceCurrencyCode: string | UdtCode;
    targetCurrencyCode: string | UdtCode;
    calculationRate: string | UdtRate;
    date?: string | UdtDate;
};
/**
 * Represents the TaxExchangeRate component in the invoice.
 */
declare class TaxExchangeRate extends GenericAggregateComponent {
    /**
     * @param {AllowedParams} content
     */
    constructor(content: AllowedParams);
    /**
     * Get the source currency code.
     * @param {boolean} [raw=true] - Return raw content or UdtCode instance.
     * @returns {string | UdtCode} The source currency code.
     */
    getSourceCurrencyCode(raw?: boolean): any;
    /**
     * Get the target currency code.
     * @param {boolean} [raw=true] - Return raw content or UdtCode instance.
     * @returns {string | UdtCode} The target currency code.
     */
    getTargetCurrencyCode(raw?: boolean): any;
    /**
     * Get the calculation rate.
     * @param {boolean} [raw=true] - Return raw content or UdtRate instance.
     * @returns {string | UdtRate} The calculation rate.
     */
    getCalculationRate(raw?: boolean): any;
    /**
     * Get the date of the exchange rate.
     * @param {boolean} [raw=true] - Return raw content or UdtDate instance.
     * @returns {string | UdtDate | undefined} The date, if set.
     */
    getDate(raw?: boolean): any;
}
export { TaxExchangeRate, AllowedParams as TaxExchangeRateParams };
