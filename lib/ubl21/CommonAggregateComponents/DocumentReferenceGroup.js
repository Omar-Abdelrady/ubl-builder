"use strict";
/* tslint:disable:max-classes-per-file */
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdditionalDocumentReference = exports.ContractDocumentReference = exports.OriginatorDocumentReference = exports.StatementDocumentReference = exports.ReceiptDocumentReference = exports.InvoiceDocumentReference = exports.DocumentReference = exports.DespatchDocumentReference = void 0;
/* TODO GANERIC CLASSES */
const GenericAggregateComponent_1 = require("./GenericAggregateComponent");
const UnqualifiedDataTypes_1 = require("../types/UnqualifiedDataTypes");
/* TODO GANERIC CLASSES */
const Attachment_1 = require("./Attachment");
const ValidityPeriod_1 = require("./ValidityPeriod");
// const { ValidityPeriod, ValidityPeriodParams } = require("./ValidityPeriod");
// const { IssuerParty, IssuerPartyParams } = require("./PartyTypeGroup");
const ParamsMap = {
    id: { order: 1, attributeName: 'cbc:ID', min: 1, max: 1, classRef: UnqualifiedDataTypes_1.UdtIdentifier },
    copyIndicator: { order: 2, attributeName: 'cbc:CopyIndicator', min: 0, max: 1, classRef: UnqualifiedDataTypes_1.UdtIndicator },
    uuid: { order: 3, attributeName: 'cbc:UUID', min: 0, max: 1, classRef: UnqualifiedDataTypes_1.UdtIdentifier },
    issueDate: { order: 4, attributeName: 'cbc:IssueDate', min: 0, max: 1, classRef: UnqualifiedDataTypes_1.UdtDate },
    issueTime: { order: 5, attributeName: 'cbc:IssueTime', min: 0, max: 1, classRef: UnqualifiedDataTypes_1.UdtTime },
    documentTypeCode: { order: 6, attributeName: 'cbc:DocumentTypeCode', min: 0, max: 1, classRef: UnqualifiedDataTypes_1.UdtCode },
    documentType: { order: 7, attributeName: 'cbc:DocumentType', min: 0, max: 1, classRef: UnqualifiedDataTypes_1.UdtText },
    xPath: { order: 8, attributeName: 'cbc:XPath', min: 0, max: undefined, classRef: UnqualifiedDataTypes_1.UdtText },
    languageID: { order: 9, attributeName: 'cbc:LanguageID', min: 0, max: 1, classRef: UnqualifiedDataTypes_1.UdtIdentifier },
    localeCode: { order: 10, attributeName: 'cbc:LocaleCode', min: 0, max: 1, classRef: UnqualifiedDataTypes_1.UdtCode },
    versionID: { order: 11, attributeName: 'cbc:VersionID', min: 0, max: 1, classRef: UnqualifiedDataTypes_1.UdtIdentifier },
    documentStatusCode: { order: 12, attributeName: 'cbc:DocumentStatusCode', min: 0, max: 1, classRef: UnqualifiedDataTypes_1.UdtCode },
    documentDescription: {
        order: 13,
        attributeName: 'cbc:DocumentDescription',
        min: 0,
        max: undefined,
        classRef: UnqualifiedDataTypes_1.UdtIdentifier,
    },
    attachment: { order: 14, attributeName: 'cac:Attachment', min: 0, max: 1, classRef: Attachment_1.Attachment },
    validityPeriod: { order: 15, attributeName: 'cac:PeriodType', min: 0, max: 1, classRef: ValidityPeriod_1.ValidityPeriod },
    // issuerParty: { order: 16, attributeName: 'cac:IssuerParty', min: 0, max:1, classRef: IssuerParty },
    //                                   TODO CAC MISSING
    // resultOfVerification: { order: 17, attributeName: 'cac:ResultOfVerification', min: 0, max:1, classRef: null },
    //                                   TODO CAC MISSING
};
class DespatchDocumentReference extends GenericAggregateComponent_1.default {
    constructor(content) {
        super(content, ParamsMap, 'cac:DespatchDocumentReference');
    }
}
exports.DespatchDocumentReference = DespatchDocumentReference;
/**
 * A class to define a reference to an Order.
 */
class DocumentReference extends GenericAggregateComponent_1.default {
    constructor(content) {
        super(content, ParamsMap, 'cac:DocumentReference');
    }
    /**
     * @param value
     */
    setCopyIndicator(value) {
        this.attributes.copyIndicator = value instanceof UnqualifiedDataTypes_1.UdtIndicator ? value : new UnqualifiedDataTypes_1.UdtIndicator(value);
        return this;
    }
}
exports.DocumentReference = DocumentReference;
class InvoiceDocumentReference extends GenericAggregateComponent_1.default {
    /**
     * @param content
     */
    constructor(content) {
        super(content, ParamsMap, 'cac:InvoiceDocumentReference');
    }
}
exports.InvoiceDocumentReference = InvoiceDocumentReference;
class ReceiptDocumentReference extends GenericAggregateComponent_1.default {
    /**
     * @param {AllowedParams} content
     */
    constructor(content) {
        super(content, ParamsMap, 'cac:ReceiptDocumentReference');
    }
}
exports.ReceiptDocumentReference = ReceiptDocumentReference;
class StatementDocumentReference extends GenericAggregateComponent_1.default {
    /**
     * @param {AllowedParams} content
     * @param {string} name
     */
    constructor(content) {
        super(content, ParamsMap, 'cac:StatementDocumentReference');
    }
}
exports.StatementDocumentReference = StatementDocumentReference;
class OriginatorDocumentReference extends GenericAggregateComponent_1.default {
    /**
     * @param {AllowedParams} content
     */
    constructor(content) {
        super(content, ParamsMap, 'cac:OriginatorDocumentReference');
    }
}
exports.OriginatorDocumentReference = OriginatorDocumentReference;
class ContractDocumentReference extends GenericAggregateComponent_1.default {
    /**
     * @param {AllowedParams} content
     */
    constructor(content) {
        super(content, ParamsMap, 'cac:ContractDocumentReference');
    }
}
exports.ContractDocumentReference = ContractDocumentReference;
class AdditionalDocumentReference extends GenericAggregateComponent_1.default {
    /**
     * @param {AllowedParams} content
     * @param {string} name
     */
    constructor(content) {
        super(content, ParamsMap, 'cac:AdditionalDocumentReference');
    }
}
exports.AdditionalDocumentReference = AdditionalDocumentReference;
