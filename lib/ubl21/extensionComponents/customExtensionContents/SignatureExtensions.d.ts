import AnyExtensionContent from '../AnyExtensionContent';
type AllowedParams = {
    signature: string;
};
/**
 *
 */
declare class SignatureExtensions extends AnyExtensionContent {
    /**     *
     * @param {AllowedParams} content
     * @param {string} name
     */
    constructor(content: AllowedParams);
}
export { SignatureExtensions, AllowedParams as SignatureExtensionsParams };
