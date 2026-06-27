"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GenericAggregateComponent_1 = require("../CommonAggregateComponents/GenericAggregateComponent");
/**
 * Any element [1..1] Namespace: ##other, Process Contents: lax
 */
class AnyExtensionContent extends GenericAggregateComponent_1.default {
    /**
     * @param {any} content
     * @param {string} name
     */
    constructor(content, ParamsMap, extensionName) {
        super(content, ParamsMap, extensionName);
    }
}
exports.default = AnyExtensionContent;
