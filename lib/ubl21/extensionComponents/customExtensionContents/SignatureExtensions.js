"use strict";
// 'use strict'
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignatureExtensions = void 0;
const AnyExtensionContent_1 = require("../AnyExtensionContent");
// const { AnyExtensionContent } = require("../AnyExtensionContent");
// const { SignatureExtensionsContent, SignatureExtensionsContentParams } = require("./DianExtensionContent");
const ParamsMap = {
// ##################################  TODO CAC MISSING ################################################
// signature: { order: 1,  attributeName: 'ds:Signature', min: 0, max: 1, classRef: SignatureExtensionsContent }
};
/**
 *
 */
class SignatureExtensions extends AnyExtensionContent_1.default {
    /**     *
     * @param {AllowedParams} content
     * @param {string} name
     */
    constructor(content) {
        super(content, ParamsMap, 'cac:SignatureExtensions');
    }
}
exports.SignatureExtensions = SignatureExtensions;
