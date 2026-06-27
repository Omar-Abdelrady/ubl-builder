"use strict";
// 'use strict'
Object.defineProperty(exports, "__esModule", { value: true });
exports.DianExtensions = void 0;
const AnyExtensionContent_1 = require("../AnyExtensionContent");
const DianExtensionContent_1 = require("./DianExtensionContent");
// const { AnyExtensionContent } = require("../AnyExtensionContent");
// const { DianExtensionsContent, DianExtensionsContentParams } = require("./DianExtensionContent");
const ParamsMap = {
    // ##################################  TODO CAC MISSING ################################################
    dianExtensions: { order: 1, attributeName: 'sts:DianExtensions', min: 0, max: 1, classRef: DianExtensionContent_1.DianExtensionsContent },
};
/**
 * Any element [1..1] Namespace: ##other, Process Contents: lax
 */
class DianExtensions extends AnyExtensionContent_1.default {
    /**     *
     * @param {AllowedParams} content
     * @param {string} name
     */
    constructor(content) {
        super(content, ParamsMap, 'cac:DianExtensions');
    }
    setDianExtensionsContent(value) {
        // console.log(value);
        throw new Error('not implemented');
    }
    /**
     * @returns {DianExtensionsContent}
     */
    getDianExtensionsContent() {
        return this.attributes.dianExtensions;
    }
}
exports.DianExtensions = DianExtensions;
