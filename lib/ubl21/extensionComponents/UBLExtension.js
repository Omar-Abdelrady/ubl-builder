"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UBLExtensionType = void 0;
const GenericAggregateComponent_1 = require("../CommonAggregateComponents/GenericAggregateComponent");
const UnqualifiedDataTypes_1 = require("../types/UnqualifiedDataTypes");
const AnyExtensionContent_1 = require("./AnyExtensionContent");
/*
    1    cbc:ID [0..1]     An identifier for the Extension assigned by the creator of the extension.
    2    cbc:Name [0..1]     A name for the Extension assigned by the creator of the extension.
    3    ext:ExtensionAgencyID [0..1]     An agency that maintains one or more Extensions.
    4    ext:ExtensionAgencyName [0..1]     The name of the agency that maintains the Extension.
    5    ext:ExtensionVersionID [0..1]     The version of the Extension.
    6    ext:ExtensionAgencyURI [0..1]     A URI for the Agency that maintains the Extension.
    7    ext:ExtensionURI [0..1]     A URI for the Extension.
    8    ext:ExtensionReasonCode [0..1]     A code for reason the Extension is being included.
    9    ext:ExtensionReason [0..1]     A description of the reason for the Extension.
    10    ext:ExtensionContent [1..1]     The definition of the extension content.
*/
const ParamsMap = {
    id: { order: 1, attributeName: 'cbc:ID', min: 0, max: 1, classRef: UnqualifiedDataTypes_1.UdtIdentifier },
    name: { order: 2, attributeName: 'cbc:Name', min: 0, max: 1, classRef: UnqualifiedDataTypes_1.UdtName },
    extensionAgencyID: { order: 3, attributeName: 'ext:ExtensionAgencyID', min: 0, max: 1, classRef: UnqualifiedDataTypes_1.UdtIdentifier },
    extensionAgencyName: { order: 4, attributeName: 'ext:ExtensionAgencyName', min: 0, max: 1, classRef: UnqualifiedDataTypes_1.UdtText },
    extensionVersionID: { order: 5, attributeName: 'ext:ExtensionVersionID', min: 0, max: 1, classRef: UnqualifiedDataTypes_1.UdtIdentifier },
    extensionAgencyURI: { order: 6, attributeName: 'ext:ExtensionAgencyURI', min: 0, max: 1, classRef: UnqualifiedDataTypes_1.UdtIdentifier },
    extensionURI: { order: 7, attributeName: 'ext:ExtensionURI', min: 0, max: 1, classRef: UnqualifiedDataTypes_1.UdtIdentifier },
    extensionReasonCode: { order: 8, attributeName: 'ext:ExtensionReasonCode', min: 0, max: 1, classRef: UnqualifiedDataTypes_1.UdtCode },
    extensionReason: { order: 9, attributeName: 'ext:ExtensionReason', min: 0, max: 1, classRef: UnqualifiedDataTypes_1.UdtText },
    extensionContent: { order: 10, attributeName: 'ext:ExtensionContent', min: 1, max: 1, classRef: AnyExtensionContent_1.default },
};
/**
 *
 */
class UBLExtension extends GenericAggregateComponent_1.default {
    /**     *
     * @param {AllowedParams} content
     * @param {string} name
     */
    constructor(content) {
        super(content, ParamsMap, 'cac:UBLExtension');
    }
    setExtensionContent(value) {
        if (!(value instanceof AnyExtensionContent_1.default)) {
            throw new Error('value must be an AnyExtensionContent instance');
        }
        this.attributes.extensionContent = value;
    }
    /**
     * @returns {AnyExtensionContent}
     */
    getExtensionContent() {
        return this.attributes.extensionContent;
    }
}
exports.UBLExtensionType = UBLExtension;
