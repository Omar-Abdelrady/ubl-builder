"use strict";
// 'use strict'
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestLineReference = exports.QuotationLineReference = exports.ParentDocumentLineReference = exports.DependentLineReference = exports.CatalogueLineReference = exports.CallForTendersLineReference = exports.ReceiptLineReference = exports.DespatchLineReference = exports.LineReference = void 0;
const GenericAggregateComponent_1 = require("./GenericAggregateComponent");
const UnqualifiedDataTypes_1 = require("../types/UnqualifiedDataTypes");
const DocumentReferenceGroup_1 = require("./DocumentReferenceGroup");
/* TODO GANERIC CLASSES */
/*
  1  cbc:LineID [1..1] Identifies the referenced line in the document.
  2  cbc:UUID [0..1]   A universally unique identifier for this line reference.
  3  cbc:LineStatusCode [0..1]    A code signifying the status of the referenced line with respect to its original state.
  4  cac:DocumentReference [0..1]    A reference to the document containing the referenced line.
*/
const ParamsMap = {
    lineID: { order: 1, attributeName: 'cbc:LineID', min: 0, max: 1, classRef: UnqualifiedDataTypes_1.UdtIdentifier },
    uuid: { order: 2, attributeName: 'cbc:UUID', min: 0, max: 1, classRef: UnqualifiedDataTypes_1.UdtIdentifier },
    lineStatusCode: { order: 3, attributeName: 'cbc:LineStatusCode', min: 0, max: 1, classRef: UnqualifiedDataTypes_1.UdtCode },
    documentReference: { order: 4, attributeName: 'cac:DocumentReference', min: 0, max: 1, classRef: DocumentReferenceGroup_1.DocumentReference },
};
class LineReference extends GenericAggregateComponent_1.default {
    constructor(content) {
        super(content, ParamsMap, 'cac:LineReference');
    }
}
exports.LineReference = LineReference;
exports.DespatchLineReference = LineReference;
exports.ReceiptLineReference = LineReference;
exports.CallForTendersLineReference = LineReference;
exports.CatalogueLineReference = LineReference;
exports.DependentLineReference = LineReference;
exports.ParentDocumentLineReference = LineReference;
exports.QuotationLineReference = LineReference;
exports.RequestLineReference = LineReference;
