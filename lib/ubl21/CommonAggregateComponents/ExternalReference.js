"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExternalReference = void 0;
const GenericAggregateComponent_1 = require("./GenericAggregateComponent");
const UnqualifiedDataTypes_1 = require("../types/UnqualifiedDataTypes");
const ParamsMap = {
    URI: { order: 1, attributeName: 'cbc:URI', min: 0, max: 1, classRef: UnqualifiedDataTypes_1.UdtIdentifier },
    documentHash: { order: 2, attributeName: 'cbc:DocumentHash', min: 0, max: 1, classRef: UnqualifiedDataTypes_1.UdtText },
    hashAlgorithmMethod: { order: 3, attributeName: 'cbc:HashAlgorithmMethod', min: 0, max: 1, classRef: UnqualifiedDataTypes_1.UdtText },
    expiryDate: { order: 4, attributeName: 'cbc:ExpiryDate', min: 0, max: 1, classRef: UnqualifiedDataTypes_1.UdtDate },
    expiryTime: { order: 5, attributeName: 'cbc:ExpiryTime', min: 0, max: 1, classRef: UnqualifiedDataTypes_1.UdtTime },
    mimeCode: { order: 6, attributeName: 'cbc:MimeCode', min: 0, max: 1, classRef: UnqualifiedDataTypes_1.UdtCode },
    formatCode: { order: 7, attributeName: 'cbc:FormatCode ', min: 0, max: 1, classRef: UnqualifiedDataTypes_1.UdtCode },
    encodingCode: { order: 8, attributeName: 'cbc:EncodingCode', min: 0, max: 1, classRef: UnqualifiedDataTypes_1.UdtCode },
    characterSetCode: { order: 9, attributeName: 'cbc:CharacterSetCode', min: 0, max: 1, classRef: UnqualifiedDataTypes_1.UdtCode },
    fileName: { order: 10, attributeName: 'cbc:FileName', min: 0, max: 1, classRef: UnqualifiedDataTypes_1.UdtName },
    description: { order: 11, attributeName: 'cbc:Description', min: 0, max: undefined, classRef: UnqualifiedDataTypes_1.UdtText },
};
// const GenericAggregateComponent = require("./GenericAggregateComponent");
class ExternalReference extends GenericAggregateComponent_1.default {
    /**
     *
     * @param content
     */
    constructor(content) {
        super(content, ParamsMap, 'cac:ExternalReference');
    }
}
exports.ExternalReference = ExternalReference;
