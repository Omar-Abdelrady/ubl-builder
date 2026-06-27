import GenericAggregateComponent from './GenericAggregateComponent';
import { UdtIdentifier, UdtCode, UdtDate, UdtText } from '../types/UnqualifiedDataTypes';
import { PayeeFinancialAccount } from './PayeeFinancialAccount';
type AllowedParams = {
    id?: string | UdtIdentifier;
    paymentMeansCode: string | UdtCode;
    paymentDueDate?: string | UdtDate;
    paymentChannelCode?: string | UdtCode;
    instructionID?: string | UdtIdentifier;
    instructionNotes?: string[] | UdtText[];
    paymentID?: string | UdtIdentifier;
    payeeFinancialAccount: string | PayeeFinancialAccount;
};
/**
 *
 */
declare class PaymentMeans extends GenericAggregateComponent {
    constructor(content: AllowedParams);
}
export { PaymentMeans, AllowedParams as PaymentMeansParams };
