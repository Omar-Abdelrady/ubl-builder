"use strict";
// 'use strict'
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectReference = void 0;
const GenericAggregateComponent_1 = require("./GenericAggregateComponent");
const UnqualifiedDataTypes_1 = require("../types/UnqualifiedDataTypes");
// const GenericAggregateComponent = require("./GenericAggregateComponent");
// /* TODO GANERIC CLASSES */
// const { UdtIdentifier, UdtName, UdtCode, UdtDate } = require('../types/UnqualifiedDataTypes');
// /* TODO GANERIC CLASSES */
const ParamsMap = {
    id: { order: 1, attributeName: 'cbc:ID', min: 1, max: 1, classRef: UnqualifiedDataTypes_1.UdtIdentifier },
    uuid: { order: 2, attributeName: 'cbc:UUID', min: 0, max: 1, classRef: UnqualifiedDataTypes_1.UdtIdentifier },
    issueDate: { order: 3, attributeName: 'cbc:IssueDate', min: 0, max: 1, classRef: UnqualifiedDataTypes_1.UdtDate },
    //                                   TODO CAC MISSING
    // issueDate: { order: 3, attributeName: 'cac:WorkPhaseReference', min: 0, max:1, classRef: UdtDate },
    //                                   TODO CAC MISSING
};
class ProjectReference extends GenericAggregateComponent_1.default {
    constructor(content) {
        super(content, ParamsMap, 'cac:ProjectReference');
    }
}
exports.ProjectReference = ProjectReference;
