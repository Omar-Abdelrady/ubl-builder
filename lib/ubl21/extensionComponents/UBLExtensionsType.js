"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UBLExtensions = void 0;
const UBLExtension_1 = require("./UBLExtension");
const GenericAggregateComponent_1 = require("../CommonAggregateComponents/GenericAggregateComponent");
/*
    1 ext:UBLExtension [0..*] A single extension for private use.
*/
const ParamsMap = {
    UBLExtensions: { order: 1, attributeName: 'ext:UBLExtension', min: 0, max: undefined, classRef: UBLExtension_1.UBLExtensionType },
};
/**
 *
 */
class UBLExtension extends GenericAggregateComponent_1.default {
    /**     *
     * @param {AllowedParams} content
     * @param {string} name
     */
    constructor(content) {
        super(content, ParamsMap, 'cac:UBLExtension');
        this.attributes.UBLExtensions = [];
    }
    /**
     * @returns UBLExtensionType
     */
    getDianUblExtension() {
        if (this.attributes.UBLExtensions.length > 0) {
            const dianExtension = this.attributes.UBLExtensions[0];
            return dianExtension;
        }
        else {
            return null;
        }
    }
    addUBLExtension(value) {
        const itemToPush = value instanceof UBLExtension_1.UBLExtensionType ? value : new UBLExtension_1.UBLExtensionType(value);
        this.attributes.UBLExtensions.push(itemToPush);
    }
}
exports.UBLExtensions = UBLExtension;
