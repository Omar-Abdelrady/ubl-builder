"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartyName = void 0;
const GenericAggregateComponent_1 = require("./GenericAggregateComponent");
const UnqualifiedDataTypes_1 = require("../types/UnqualifiedDataTypes");
const ParamsMap = {
    name: { order: 1, attributeName: 'cbc:Name', min: 1, max: 1, classRef: UnqualifiedDataTypes_1.UdtName },
};
class PartyName extends GenericAggregateComponent_1.default {
    constructor(content) {
        super(content, ParamsMap, 'cac:PartyName');
    }
}
exports.PartyName = PartyName;
