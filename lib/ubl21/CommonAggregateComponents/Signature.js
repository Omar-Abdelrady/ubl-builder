"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Signature = void 0;
const GenericAggregateComponent_1 = require("./GenericAggregateComponent");
const UnqualifiedDataTypes_1 = require("../types/UnqualifiedDataTypes");
const ParamsMap = {
    name: { order: 1, attributeName: 'cbc:ID', min: 1, max: 1, classRef: UnqualifiedDataTypes_1.UdtIdentifier },
    notes: { order: 2, attributeName: 'cbc:Note ', min: 1, max: undefined, classRef: UnqualifiedDataTypes_1.UdtText },
    validationDate: { order: 3, attributeName: 'cbc:ValidationDate', min: 1, max: 1, classRef: UnqualifiedDataTypes_1.UdtDate },
    validationTime: { order: 4, attributeName: 'cbc:ValidationTime', min: 1, max: 1, classRef: UnqualifiedDataTypes_1.UdtTime },
    validatorID: { order: 5, attributeName: 'cbc:ValidatorID', min: 1, max: 1, classRef: UnqualifiedDataTypes_1.UdtIdentifier },
    canonicalizationMethod: { order: 6, attributeName: 'cbc:CanonicalizationMethod', min: 1, max: 1, classRef: UnqualifiedDataTypes_1.UdtText },
    //                                   TODO CAC MISSING
    // signatureMethod: { order: 7,  attributeName: 'cbc:SignatureMethod', min: 1, max: 1, classRef: UdtText },
    // signatoryParty: { order: 8,  attributeName: 'cac:SignatoryParty', min: 1, max: 1, classRef: UdtTime },
    // validationTime: { order: 9,  attributeName: 'cbc:ValidationTime', min: 1, max: 1, classRef: UdtTime },
    // validationTime: { order: 10,  attributeName: 'cbc:ValidationTime', min: 1, max: 1, classRef: UdtTime },
    //                                   TODO CAC MISSING
};
class Signature extends GenericAggregateComponent_1.default {
    constructor(content) {
        super(content, ParamsMap, 'cac:Signature');
    }
}
exports.Signature = Signature;
