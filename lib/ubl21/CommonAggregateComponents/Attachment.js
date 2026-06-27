"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Attachment = void 0;
const GenericAggregateComponent_1 = require("./GenericAggregateComponent");
const UnqualifiedDataTypes_1 = require("../types/UnqualifiedDataTypes");
const ExternalReference_1 = require("./ExternalReference");
const ParamsMap = {
    embeddedDocumentBinaryObject: {
        order: 1,
        attributeName: 'cbc:EmbeddedDocumentBinaryObject',
        min: 0,
        max: 1,
        classRef: UnqualifiedDataTypes_1.UdtBinaryObject,
    },
    externalReference: {
        order: 1,
        attributeName: 'cac:ExternalReference',
        min: 0,
        max: 1,
        classRef: ExternalReference_1.ExternalReference,
    },
};
class Attachment extends GenericAggregateComponent_1.default {
    /**
     *
     * @param content children nodes
     */
    constructor(content) {
        super(content, ParamsMap, 'cac:Attachment');
    }
}
exports.Attachment = Attachment;
