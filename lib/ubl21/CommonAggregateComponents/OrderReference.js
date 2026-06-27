"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderReference = void 0;
const GenericAggregateComponent_1 = require("./GenericAggregateComponent");
const UnqualifiedDataTypes_1 = require("../types/UnqualifiedDataTypes");
const DocumentReferenceGroup_1 = require("./DocumentReferenceGroup");
const ParamsMap = {
    id: { order: 1, attributeName: 'cbc:ID', min: 1, max: 1, classRef: UnqualifiedDataTypes_1.UdtIdentifier },
    salesOrderID: { order: 2, attributeName: 'cbc:SalesOrderID', min: 1, max: 1, classRef: UnqualifiedDataTypes_1.UdtIdentifier },
    copyIndicator: { order: 3, attributeName: 'cbc:CopyIndicator', min: 0, max: 1, classRef: UnqualifiedDataTypes_1.UdtIndicator },
    uuid: { order: 4, attributeName: 'cbc:UUID', min: 0, max: 1, classRef: UnqualifiedDataTypes_1.UdtIdentifier },
    issueDate: { order: 5, attributeName: 'cbc:IssueDate', min: 0, max: 1, classRef: UnqualifiedDataTypes_1.UdtDate },
    issueTime: { order: 6, attributeName: 'cbc:IssueTime', min: 0, max: 1, classRef: UnqualifiedDataTypes_1.UdtTime },
    customerReference: { order: 7, attributeName: 'cbc:CustomerReference', min: 0, max: 1, classRef: UnqualifiedDataTypes_1.UdtText },
    orderTypeCode: { order: 8, attributeName: 'cbc:OrderTypeCode', min: 0, max: 1, classRef: UnqualifiedDataTypes_1.UdtCode },
    documentReference: { order: 9, attributeName: 'cac:DocumentReference', min: 0, max: 1, classRef: DocumentReferenceGroup_1.DocumentReference },
};
/**
 * http://www.datypic.com/sc/ubl21/e-cac_OrderReference.html
 */
class OrderReference extends GenericAggregateComponent_1.default {
    constructor(content) {
        super(content, ParamsMap, 'cac:OrderReference');
    }
    setsalesOrderID(value) {
        this.attributes.salesOrderID = value instanceof UnqualifiedDataTypes_1.UdtIdentifier ? value : new UnqualifiedDataTypes_1.UdtIdentifier(value);
        return this;
    }
}
exports.OrderReference = OrderReference;
