"use strict";
// 'use strict'
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidityPeriod = void 0;
const GenericAggregateComponent_1 = require("./GenericAggregateComponent");
const UnqualifiedDataTypes_1 = require("../types/UnqualifiedDataTypes");
const ParamsMap = {
    startDate: { order: 1, attributeName: 'cbc:StartDate', min: 0, max: 1, classRef: UnqualifiedDataTypes_1.UdtDate },
    startTime: { order: 2, attributeName: 'cbc:StartTime', min: 0, max: 1, classRef: UnqualifiedDataTypes_1.UdtTime },
    endDate: { order: 3, attributeName: 'cbc:EndDate', min: 0, max: 1, classRef: UnqualifiedDataTypes_1.UdtDate },
    endTime: { order: 4, attributeName: 'cbc:EndTime', min: 0, max: 1, classRef: UnqualifiedDataTypes_1.UdtTime },
    durationMeasure: { order: 5, attributeName: 'cbc:DurationMeasure', min: 0, max: 1, classRef: UnqualifiedDataTypes_1.UdtMeasure },
    descriptionCode: { order: 6, attributeName: 'cbc:DescriptionCode', min: 0, max: 1, classRef: UnqualifiedDataTypes_1.UdtCode },
    description: { order: 7, attributeName: 'cbc:Description', min: 0, max: undefined, classRef: UnqualifiedDataTypes_1.UdtText },
};
class ValidityPeriod extends GenericAggregateComponent_1.default {
    /**
     * @param {AllowedParams} content
     */
    constructor(content) {
        super(content, ParamsMap, 'cac:ValidityPeriod');
    }
}
exports.ValidityPeriod = ValidityPeriod;
