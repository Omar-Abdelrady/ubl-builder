import GenericAggregateComponent from './GenericAggregateComponent';
import { UdtText } from '../types/UnqualifiedDataTypes';
import { Country } from './CountryTypeGroup';
import { AddressLine, AddressLineParams } from './AddressLine';
type AllowedParams = {
    streetName?: string | UdtText;
    AdditionalStreetName?: string | UdtText;
    cityName: string | UdtText;
    postalZone: string | UdtText;
    countrySubentity?: string | UdtText;
    CountrySubentityCode?: string | UdtText;
    addressLines?: AddressLine[];
    country?: Country;
};
/**
 *
 */
declare class PostalAddressType extends GenericAggregateComponent {
    constructor(content: AllowedParams);
    /**
     * Add an address line to the postal address
     * @param value AddressLine instance or AddressLineParams object
     */
    addAddressLine(value: AddressLine | AddressLineParams | string): void;
}
export { PostalAddressType as PostalAddress, AllowedParams as PostalAddressTypeParams, };
