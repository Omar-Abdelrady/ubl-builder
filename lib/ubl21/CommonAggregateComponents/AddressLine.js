"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressLine = void 0;
const GenericAggregateComponent_1 = require("./GenericAggregateComponent");
/* TODO GANERIC CLASSES */
const UnqualifiedDataTypes_1 = require("../types/UnqualifiedDataTypes");
const ParamsMap = {
    line: { order: 1, attributeName: 'cbc:Line', min: 1, max: 1, classRef: UnqualifiedDataTypes_1.UdtText },
};
/**
 * cac:AddressLine
 * Namespace: urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2
 * Type: cac:AddressLineType
 * See more: http://www.datypic.com/sc/ubl21/e-cac_AddressLine.html
 */
class AddressLine extends GenericAggregateComponent_1.default {
    constructor(content) {
        super(content, ParamsMap, 'cac:AddressLine');
    }
    /**
     *
     * @param {boolean} raw as raw
     */
    getLine(raw = false) {
        return raw ? this.attributes.line.content : this.attributes.line;
    }
    /**
     *
     * @param {string | UdtText} value
     */
    setLine(value) {
        this.attributes.line = value instanceof UnqualifiedDataTypes_1.UdtText ? value : new UnqualifiedDataTypes_1.UdtText(value);
    }
}
exports.AddressLine = AddressLine;
