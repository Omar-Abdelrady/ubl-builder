"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Language = void 0;
const UnqualifiedDataTypes_1 = require("../types/UnqualifiedDataTypes");
const GenericAggregateComponent_1 = require("./GenericAggregateComponent");
const ParamsMap = {
    id: { order: 1, attributeName: 'cbc:ID', min: 1, max: 1, classRef: UnqualifiedDataTypes_1.UdtIdentifier },
    name: { order: 2, attributeName: 'cbc:Name', min: 1, max: 1, classRef: UnqualifiedDataTypes_1.UdtName },
    localeCode: { order: 3, attributeName: 'cbc:LocaleCode', min: 1, max: 1, classRef: UnqualifiedDataTypes_1.UdtCode },
};
class Language extends GenericAggregateComponent_1.default {
    constructor(content) {
        super(content, ParamsMap, 'cac:Language');
    }
}
exports.Language = Language;
